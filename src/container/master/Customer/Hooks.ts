import { EMAIL_REGEX } from "@/utils/constants"
import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { matchIsValidTel } from "mui-tel-input"
import getSessionStorageData from "@/utils/getSessionStorageData"

export const CustomerHooks = () => {

    const token=getSessionStorageData('token')
    const orgId=getSessionStorageData('orgId')

    //customer mobile states
    const [customerMobile, setCustomerMobile] = useState<string>('')

    //customer drawer stated
    const [customerDrawerOpen, setCustomerDrawerOpen] = useState<boolean>(false)

    //handle open customer drawer
    const handleOpenCustomerDrawer = () => {
        setCustomerDrawerOpen(true)
    }

    //handle close customer drawer 
    const handleCloseCustomerDrawer = () => {
        setCustomerDrawerOpen(false)
    }

    //handle mobile number change
    const handleMobileChange=(number: string)=>{
        setCustomerMobile(number)
    }

    //add customer formik
    const AddCustomerFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            customerName: '',
            customerAddress: '',
            customerEmail: '',
            gstin: '',
            maxCredLimit: 0,
            maxCredDays: 0,
            openingBalance: 0,
            underLedger: ''
        },
        validationSchema: Yup.object().shape({
            customerName: Yup.string()
                .required(text.errors.requiredErrors.customer.name),
            customerAddress: Yup.string()
                .required(text.errors.requiredErrors.customer.address),
            customerEmail: Yup.string()
                .matches(EMAIL_REGEX, text.errors.patternErrors.customer.email)
                .required(text.errors.requiredErrors.customer.email),
            gstin: Yup.string(),
            maxCredLimit: Yup.number()
                .positive(text.errors.patternErrors.customer.maxCredLimit)
                .required(text.errors.requiredErrors.customer.maxCredLimit),
            maxCredDays: Yup.number()
                .positive(text.errors.patternErrors.customer.maxCredDays)
                .required(text.errors.requiredErrors.customer.maxCredDays),
            openingBalance: Yup.number()
                .positive(text.errors.patternErrors.customer.openingBalance)
                .required(text.errors.requiredErrors.customer.openingBalance),
            underLedger: Yup.string()
                .required(text.errors.requiredErrors.customer.underLedger),
        }),
        onSubmit: (values) => {
            if(matchIsValidTel(customerMobile)){
                const data={
                    ...values, customerMobile
                }
                console.log(data, '*customer form data')
            }
        }
    })

    return {
        customerDrawerOpen,
        handleOpenCustomerDrawer,
        handleCloseCustomerDrawer,
        AddCustomerFormik,
        handleMobileChange,
        customerMobile,
        token,
        orgId
    }
}