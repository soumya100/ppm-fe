import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'

export const ShiftMasterHooks=()=>{
    // add shift formik
    const AddShiftFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            shiftName: '',
            startTime: '',
            endTime: ''
        },
        validationSchema: Yup.object().shape({
            shiftName: Yup.string()
                .required(text.errors.requiredErrors.shiftMaster.shiftName),
                startTime: Yup.string()
                .required(text.errors.requiredErrors.shiftMaster.startTime),
                endTime: Yup.string()
                .required(text.errors.requiredErrors.shiftMaster.endTime)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values, '* shift master')
            resetForm()
        }
    })

    return {
        AddShiftFormik
    }
}