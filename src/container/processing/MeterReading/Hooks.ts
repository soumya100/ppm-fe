import { DateValidationError } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"
import { useMemo, useState } from "react"
import text from '@/languages/en_US.json'
import { useFormik } from "formik"
import * as Yup from 'yup'
import getSessionStorageData from "@/utils/getSessionStorageData"

export const MeterReadingHooks = () => {

    const orgId = getSessionStorageData('orgId')
    const token = getSessionStorageData('token')

    //date states
    const [readingDate, setReadingDate] = useState<Dayjs | null>(null)
    const [readingDateError, setReadingDateError] = useState<DateValidationError | null>(null)

    //handle reading date
    const handleReadingDate = (newValue?: Dayjs) => {
        setReadingDate(newValue || null)
        if (newValue === null) {
            setReadingDateError('invalidDate')
        } else {
            setReadingDateError(null)
        }
    }

    //handle reading date error
    const handleReadingDateError = (newError?: DateValidationError | null) => {
        setReadingDateError(newError || null)
        if (readingDate === null) {
            setReadingDateError('invalidDate')
        } else {
            setReadingDateError(null)
        }
    }

    //error Message function
    const errorMessage = useMemo(() => {
        switch (readingDateError) {
            case 'invalidDate': {
                return text.errors.patternErrors.meterOpening.invalidDate
            }
            default: {
                return '';
            }
        }
    }, [readingDateError]);

    // reading date add formik
    const addMeterReadingFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            shift: '',
            pump: '',
            nozzle: '',
            staff: ''
        },
        validationSchema: Yup.object().shape({
            shift: Yup.string()
                .required(text.errors.requiredErrors.meterReading.shiftName),
            pump: Yup.string()
                .required(text.errors.requiredErrors.meterReading.pumpName),
            nozzle: Yup.string()
                .required(text.errors.requiredErrors.meterReading.nozzleName),
            staff: Yup.string()
                .required(text.errors.requiredErrors.meterReading.staffName)
        }),
        onSubmit: (values) => {
            if (readingDate !== null) {
                const data = { ...values, readingDate: dayjs(readingDate).format('YYYY-MM-DD') }
                // if(editData && Object.keys(editData).length > 0){
                //     editMeterOpeningApiCall(editData.Id, orgId, data)
                // }else{
                //     postMeterOpeningCall(orgId, data)
                // }
                console.log(data)
            } else {
                setReadingDateError('invalidDate')
            }
        }
    })

    const pumpId= Number(addMeterReadingFormik.values.pump);


    return {
        addMeterReadingFormik,
        handleReadingDate,
        errorMessage,
        handleReadingDateError, pumpId,
        readingDate, orgId, token
    }
}