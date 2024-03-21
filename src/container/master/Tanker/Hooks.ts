import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import getSessionStorageData from "@/utils/getSessionStorageData"

export const TankerHooks = () => {

    const token=getSessionStorageData('token')

    //add tanker formik
    const AddTankerFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tankerName: '',
            vehicleName: '',
            vehicleNumber: '',
            capacity: 0
        },
        validationSchema: Yup.object().shape({
            tankerName: Yup.string()
                .required(text.errors.requiredErrors.tanker.tankerName),
            vehicleName: Yup.string()
                .required(text.errors.requiredErrors.tanker.vehicleName),
            vehicleNumber: Yup.string()
                .required(text.errors.requiredErrors.tanker.vehicleNumber),
            capacity: Yup.number()
                .positive(text.errors.patternErrors.tanker.capacity)
                .required(text.errors.requiredErrors.tanker.capacity)
        }),
        onSubmit: (values) => {
            console.log(values, '*tanker form data')
        }
    })
    return {
        AddTankerFormik,
        token
    }
}