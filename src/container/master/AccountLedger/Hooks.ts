import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import React, { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { DateValidationError } from "@mui/x-date-pickers"

export const AccountLedgerHooks = () => {


    //open drawer state
    const[openAccountLedger, setOpenAccountLedger]=useState<boolean>(false)

    //date field state
    const[openingDate, setOpeningDate]=useState<Dayjs | null>(null)
    const[openingDateError, setOpeningDateError]=useState<DateValidationError | null>(null)

    //handle account ledger form open
    const handleOpenAccountLedger=()=>{
        setOpenAccountLedger(true)
    }

    //handle account ledger form close
    const handleCloseAccountLedger=()=>{
        setOpenAccountLedger(false)
        AddAccountLedgerFormik.resetForm()
    }


    //handle opening date 
    const handleOpeningDate=(newValue: Dayjs)=>{
        setOpeningDate(newValue)
        if(newValue === null){
            setOpeningDateError('invalidDate')
        }
    }

    //handle opening date error
    const handleOpeningDateError=(newError: DateValidationError | null)=>{
        setOpeningDateError(newError)
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
            accountHead: ''
        },
        validationSchema: Yup.object().shape({
            ledgerName: Yup.string()
                .required(text.errors.requiredErrors.accountLedger.ledgerName),
            
                ledgerCode: Yup.number()
                .positive(text.errors.patternErrors.accountLedger.ledgerCode)
                .required(text.errors.requiredErrors.ledgerCode),
                accountHead: Yup.string()
                .required(text.errors.requiredErrors.accountLedger.accountHead),
                openingBalance: Yup.number()
                .positive(text.errors.patternErrors.accountLedger.openingBalance)
                .required(text.errors.requiredErrors.accountLedger.openingBalance)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values, '* account ledger')
        }
    })

    return {
        AddAccountLedgerFormik,
        handleCloseAccountLedger,
        handleOpenAccountLedger,
        openAccountLedger,
        errorMessage,
        handleOpeningDate,
        handleOpeningDateError,
        openingDate
    }
}