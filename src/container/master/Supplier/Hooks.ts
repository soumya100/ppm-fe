import getSessionStorageData from "@/utils/getSessionStorageData"
import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { EMAIL_REGEX } from "@/utils/constants"
import { matchIsValidTel } from "mui-tel-input"

export const SupplierHooks = () => {
    const token = getSessionStorageData('token')
    const orgId = getSessionStorageData('orgId')

    //supplier mobile states
    const [supplierMobile, setSupplierMobile] = useState<string>('')

    //supplier drawer stated
    const [supplierDrawer, setSupplierDrawer] = useState<boolean>(false)

    //handle open supplier drawer
    const handleOpenSupplierDrawer = () => {
        setSupplierDrawer(true)
    }

    //handle close supplier drawer 
    const handleCloseSupplierDrawer = () => {
        setSupplierDrawer(false)
    }

    //handle mobile number change
    const handleMobileChange = (number: string) => {
        setSupplierMobile(number)
    }

    //add supplier formik
    const AddSupplierFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            supplierName: '',
            supplierAddress: '',
            supplierEmail: '',
            gstin: '',
            maxCredDays: 0,
            openingBalance: 0,
            underLedger: ''
        },
        validationSchema: Yup.object().shape({
            supplierName: Yup.string()
                .required(text.errors.requiredErrors.supplier.name),
            supplierAddress: Yup.string()
                .required(text.errors.requiredErrors.supplier.address),
            supplierEmail: Yup.string()
                .matches(EMAIL_REGEX, text.errors.patternErrors.supplier.email)
                .required(text.errors.requiredErrors.supplier.email),
            gstin: Yup.string()
                .required(text.errors.requiredErrors.supplier.gstin),
            maxCredDays: Yup.number()
                .positive(text.errors.patternErrors.supplier.maxCredDays)
                .required(text.errors.requiredErrors.supplier.maxCredDays),
            openingBalance: Yup.number()
                .positive(text.errors.patternErrors.supplier.openingBalance)
                .required(text.errors.requiredErrors.supplier.openingBalance),
            underLedger: Yup.string()
                .required(text.errors.requiredErrors.supplier.underLedger),
        }),
        onSubmit: (values) => {
            if (matchIsValidTel(supplierMobile)) {
                const data = {
                    ...values, supplierMobile
                }
                console.log(data, '*supplier form data')
            }
        }
    })

    return {
        supplierDrawer,
        handleOpenSupplierDrawer,
        handleCloseSupplierDrawer,
        AddSupplierFormik,
        handleMobileChange,
        supplierMobile,
        token,
        orgId
    }
}