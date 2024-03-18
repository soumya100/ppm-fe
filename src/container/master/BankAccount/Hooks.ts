import { useFormik } from "formik"
import { useMemo, useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { DateValidationError } from "@mui/x-date-pickers"
import { Dayjs } from "dayjs"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { getBankAccountApi } from "./BankAccountApis"
import { useDispatch } from "react-redux"
import { getBankAccountData } from "./BankAccountReducer"
import toast from "react-hot-toast"

export const BankAccountHooks = () => {

    const token=getSessionStorageData('token')
    const orgId=getSessionStorageData('orgId')
    const dispatch=useDispatch()

    const [openBankAccountDrawer, setOpenBankAccountDrawer] = useState<boolean>(false)
    const[loader, setLoader]=useState<boolean>(false)

    //date field state
    const [openingDate, setOpeningDate] = useState<Dayjs | null>(null)
    const [openingDateError, setOpeningDateError] = useState<DateValidationError | null>(null)


    //open bank account drawer
    const handleOpenBankAccountDrawer = () => {
        setOpenBankAccountDrawer(true)
    }

    //close bank account drawer
    const handleCloseBankAccountDrawer = () => {
        setOpenBankAccountDrawer(false)
    }

    //handle opening date 
    const handleOpeningDate = (newValue?: Dayjs) => {
        setOpeningDate(newValue || null)
        if (newValue === null) {
            setOpeningDateError('invalidDate')
        } else {
            setOpeningDateError(null)
        }
    }

    //handle opening date error
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
                return text.errors.patternErrors.bankAccount.invalidDate
            }
            default: {
                return '';
            }
        }
    }, [openingDateError]);

    //bank account formik
    const AddBankAccountFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            bankName: '',
            bankBranch: '',
            bankIfsc: '',
            accountNo: 0,
            underLedger: '',
            openingBalance: 0

        },
        validationSchema: Yup.object().shape({
            bankName: Yup.string()
                .required(text.errors.requiredErrors.bankAccount.bankName),
            bankBranch: Yup.string()
                .required(text.errors.requiredErrors.bankAccount.bankBranch),
            bankIfsc: Yup.string()
                .required(text.errors.requiredErrors.bankAccount.bankIfSc),
            accountNo: Yup.number()
                .positive(text.errors.patternErrors.bankAccount.accountNo.positive)
                .required(text.errors.requiredErrors.bankAccount.accountNo)
                .integer(text.errors.patternErrors.bankAccount.accountNo.notDecimal)
            ,
            underLedger: Yup.string()
                .required(text.errors.requiredErrors.bankAccount.underLedger),
            openingBalance: Yup.number()
                .positive(text.errors.patternErrors.bankAccount.openingBalance)
                .required(text.errors.requiredErrors.bankAccount.openingBalance)
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    //bank account get api call
    const getBankAccountApiCall = async (id: number) => {
        setLoader(true)
        getBankAccountApi(id).then((res: any) => {
            if (res.messsage === 'Data Found') {
                dispatch(getBankAccountData(res.Data))
            } else {
                dispatch(getBankAccountData([]))
            }
        }).catch((err: any) => {
            console.log(err)
            toast.error('Something went wrong')
            dispatch(getBankAccountData([]))
        }).finally(() => {
            setLoader(false)
        })
    }
    return {
        token, 
        orgId,
        AddBankAccountFormik,
        openBankAccountDrawer,
        handleOpenBankAccountDrawer,
        handleCloseBankAccountDrawer,
        handleOpeningDate,
        openingDate,
        handleOpeningDateError,
        errorMessage,
        getBankAccountApiCall
    }
}