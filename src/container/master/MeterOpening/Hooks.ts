import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import dayjs, { Dayjs } from "dayjs"
import { DateValidationError } from "@mui/x-date-pickers"
import { useMemo, useState } from "react"

export const MeterHooks = () => {

    const [openingDate, setOpeningDate] = useState<Dayjs | null>(null)
    const [openingDateError, setOpeningDateError] = useState<DateValidationError | null>(null)

    const handleOpeningDate = (newValue?: Dayjs) => {
        setOpeningDate(newValue || null)
        if (newValue === null) {
            setOpeningDateError('invalidDate')
        } else {
            setOpeningDateError(null)
        }
    }

    //handle Installation date error
    const handleOpeningDateError = (newError?: DateValidationError | null) => {
        setOpeningDateError(newError || null)
        if (openingDate === null) {
            setOpeningDateError('invalidDate')
        } else {
            setOpeningDateError(null)
        }
    }

    //error Message function
    const errorMessage = useMemo(() => {
        switch (openingDateError) {
            case 'invalidDate': {
                return text.errors.patternErrors.meterOpening.invalidDate
            }
            default: {
                return '';
            }
        }
    }, [openingDateError]);

    //reset form data
    const handleResetFormData = () => {
        addMeterOpeningFormik.resetForm()
        setOpeningDate(null)
        setOpeningDateError(null)
    }

    // meter opening add formik
    const addMeterOpeningFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            pump: '',
            nozzle: '',
            openingReading: 0
        },
        validationSchema: Yup.object().shape({
            pump: Yup.string()
                .required(text.errors.requiredErrors.meterOpening.pump),
            nozzle: Yup.string()
                .required(text.errors.requiredErrors.meterOpening.nozzle),
            openingReading: Yup.number()
                .positive(text.errors.patternErrors.meterOpening.openingReading)
                .required(text.errors.requiredErrors.meterOpening.openingReading)
        }),
        onSubmit: (values) => {
            if (openingDate !== null) {
                const data = { ...values, rateDate: dayjs(openingDate).format('YYYY-MM-DD') }
                // if(editData && Object.keys(editData).length > 0){
                //     editRateApiCall(editData.Id, orgId, data)
                //     // console.log(data)
                // }else{
                //     // postRateApiCall(orgId, data)
                // }
                console.table(data)
            } else {
                setOpeningDateError('invalidDate')
            }
        }
    })


    return {
        addMeterOpeningFormik,
        handleOpeningDate,
        handleOpeningDateError,
        errorMessage,
        openingDate,
        handleResetFormData
    }
}