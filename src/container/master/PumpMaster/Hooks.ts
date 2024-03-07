import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'

export const PumpMasterHooks = () => {
    // item master add formik
    const AddPumpMasterFormik = useFormik({
        initialValues: {
            pumpName: '',
            nozzleNumber: 0,
            nozzleName: ''
        },
        validationSchema: Yup.object().shape({
            pumpName: Yup.string()
                .required(text.errors.requiredErrors.addPumpMaster.pumpName),
            nozzleNumber: Yup.number()
                .moreThan(1, text.errors.patternErrors.addPumpMaster.nozzleNumber)
                .required(text.errors.requiredErrors.addPumpMaster.nozzleNumber),
            nozzleName: Yup.string()
                .required(text.errors.requiredErrors.addPumpMaster.nozzleName)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values, '* values')
        }
    })
    return{
        AddPumpMasterFormik
    }
}