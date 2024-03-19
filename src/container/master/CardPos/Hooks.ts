import { useFormik } from "formik"
import { useMemo, useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import dayjs, { Dayjs } from "dayjs"
import { DateValidationError } from "@mui/x-date-pickers"

export const CardPosHooks = () => {

    //drawer states
    const [openCardDrawer, setOpenCardDrawer] = useState<boolean>(false)

    //radioStates
    const[posType, setPosType]= useState<string>('card')

    //date field state
    const [installationDate, setInstallationDate] = useState<Dayjs | null>(null)
    const [installationDateError, setInstallationDateError] = useState<DateValidationError | null>(null)

    //open drawer function
    const handleOpenCardDrawer = () => {
        setOpenCardDrawer(true)
    }

    //close drawer fucntion
    const handleCloseCardDrawer = () => {
        setOpenCardDrawer(false)
        AddCardPosFormik.resetForm()
        setInstallationDate(null)
        setInstallationDateError(null)
    }

    //handle pos types 
    const handlePosTypes=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setPosType((event.target as HTMLInputElement).value)
    }

    //handle installation date 
    const handleInstallationDate = (newValue?: Dayjs) => {
        setInstallationDate(newValue || null)
        if (newValue === null) {
            setInstallationDateError('invalidDate')
        } else {
            setInstallationDateError(null)
        }
    }

    //handle Installation date error
    const handleInstallationDateError = (newError?: DateValidationError | null) => {
        setInstallationDateError(newError || null)
        if (installationDate === null) {
            setInstallationDateError('invalidDate')
        } else {
            setInstallationDateError(null)
        }
    }

    //error Message function
    const errorMessage = useMemo(() => {
        switch (installationDateError) {
            case 'invalidDate': {
                return text.errors.patternErrors.bankAccount.invalidDate
            }
            default: {
                return '';
            }
        }
    }, [installationDateError]);

    //add card/pos formik 
    const AddCardPosFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            posName: '',
            posProvider: '',
            linkBank: '',
        },
        validationSchema: Yup.object().shape({
            posName: Yup.string()
                .required(text.errors.requiredErrors.cardPos.posName),
                posProvider: Yup.string()
                .required(text.errors.requiredErrors.cardPos.posProvider),
                linkBank: Yup.string()
                .required(text.errors.requiredErrors.cardPos.linkBank),
        }),
        onSubmit: (values) => {
            if (installationDate !== null) {
                const data = { ...values, openingDate: dayjs(installationDate).format('YYYY-MM-DD'), posType }
                // if(editData && Object.keys(editData).length > 0){
                //     editBankAccountApiCall(editData.Id, orgId, data)
                // }else{
                    // postBankAccountApiCall(orgId, data)
                    console.log(data)
                // }   
            } else {
                setInstallationDateError('invalidDate')
            }
        }
    })

    return {
        handleCloseCardDrawer,
        handleOpenCardDrawer,
        openCardDrawer,
        handlePosTypes,
        posType,
        AddCardPosFormik,
        errorMessage,
        handleInstallationDate,
        handleInstallationDateError,
        installationDate
    }
}