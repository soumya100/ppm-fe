import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import React, { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { DateValidationError } from "@mui/x-date-pickers"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { getAccountLedgerData } from "./AccountLedgerReducer"
import { getAccountLedgerApi, postAccountLedgerAPI } from "./AccountLedgerApis"
import getSessionStorageData from "@/utils/getSessionStorageData"

export const AccountLedgerHooks = () => {


    //open drawer state
    const dispatch = useDispatch()
    const token = getSessionStorageData('token')
    const orgId = getSessionStorageData('orgId')

    const [openAccountLedger, setOpenAccountLedger] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const[postLoaders, setPostLoaders]=useState<boolean>(false)
    //date field state
    const [openingDate, setOpeningDate] = useState<Dayjs | null>(null)
    const [openingDateError, setOpeningDateError] = useState<DateValidationError | null>(null)

    //handle account ledger form open
    const handleOpenAccountLedger = () => {
        setOpenAccountLedger(true)
    }

    //handle account ledger form close
    const handleCloseAccountLedger = () => {
        setOpenAccountLedger(false)
        AddAccountLedgerFormik.resetForm()
        setOpeningDate(null)
        setOpeningDateError(null)
    }


    //handle opening date 
    const handleOpeningDate = (newValue?: Dayjs) => {
        setOpeningDate(newValue || null)
        if (newValue === null) {
            setOpeningDateError('invalidDate')
        }else{
            setOpeningDateError(null)
        }
    }

    //handle opening date error
    const handleOpeningDateError = (newError?: DateValidationError | null) => {
        setOpeningDateError(newError || null)
        if (openingDate === null) {
            setOpeningDateError('invalidDate')
        }else{
            setOpeningDateError(null)
        }
    }

    //error Message function
    const errorMessage = React.useMemo(() => {
        switch (openingDateError) {
            case 'invalidDate': {
                return text.errors.patternErrors.accountLedger.invalidDate
            }
            default: {
                return '';
            }
        }
    }, [openingDateError]);

    // item category add formik
    const AddAccountLedgerFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ledgerName: '',
            ledgerCode: 0,
            accountHead: '',
            openingBalance: 0
        },
        validationSchema: Yup.object().shape({
            ledgerName: Yup.string()
                .required(text.errors.requiredErrors.accountLedger.ledgerName),

            ledgerCode: Yup.number()
                .positive(text.errors.patternErrors.accountLedger.ledgerCode)
                .required(text.errors.requiredErrors.accountLedger.ledgerCode),
            accountHead: Yup.string()
                .required(text.errors.requiredErrors.accountLedger.accountHead),
            openingBalance: Yup.number()
                .positive(text.errors.patternErrors.accountLedger.openingBalance)
                .required(text.errors.requiredErrors.accountLedger.openingBalance)
        }),
        onSubmit: (values) => {
            if (openingDate !== null) {
              const data={ ...values, openingDate: dayjs(openingDate).format('YYYY-MM-DD') }
              postAccountLedgerApiCall(orgId, data)
                // setOpeningDate(null)
            } else {
                setOpeningDateError('invalidDate')
            }
        }
    })

    //get api call for account ledger
    const getAccountLedgerApiCall = async (id: number) => {
        setLoader(true)
        getAccountLedgerApi(id).then((res: any) => {
            if (res.messsage === 'Data Found') {
                dispatch(getAccountLedgerData(res.Data))
            } else {
                dispatch(getAccountLedgerData([]))
            }
        }).catch((err: any) => {
            console.log(err)
            toast.error('Something went wrong')
            dispatch(getAccountLedgerData([]))
        }).finally(() => {
            setLoader(false)
        })
    }

    //post api call for account ledger
    const postAccountLedgerApiCall= async (orgId: number, item: any)=>{
        setPostLoaders(true);
        let bodyData = {
            Acct_Name: item.ledgerName,
            Acct_Code:item.ledgerCode,
            Acct_Head:item.accountHead,
            org_id: orgId,
            Open_Bal: item.openingBalance,
            Open_Date: item.openingDate
        }
        postAccountLedgerAPI(bodyData)
            .then((res: any) => {
                console.log(res, '* res')
                if (res.Message==='Account Ledger Add Successful') {
                    handleCloseAccountLedger()
                    getAccountLedgerApiCall(orgId)
                    toast.success('Account ledger created successfully')
                } else {
                    toast.error(res.Message)
                }
            })
            .catch((err) => {
                console.error(err)
                toast.error('Something went wrong')
            }).finally(()=>{
                setPostLoaders(false)
            })
    }

    return {
        token,
        orgId,
        loader,
        AddAccountLedgerFormik,
        handleCloseAccountLedger,
        handleOpenAccountLedger,
        openAccountLedger,
        errorMessage,
        handleOpeningDate,
        handleOpeningDateError,
        openingDate,
        getAccountLedgerApiCall,
        postLoaders
    }
}