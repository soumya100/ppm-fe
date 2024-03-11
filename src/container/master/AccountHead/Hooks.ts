import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'

export const AccountHeadHooks=()=>{
    // add shift formik
    const AddAccountHeadFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            headName: '',
            headCode: '',
            mainHead: ''
        },
        validationSchema: Yup.object().shape({
            headName: Yup.string()
                .required(text.errors.requiredErrors.addAccountHead.headName),
                headCode: Yup.number()
                .positive(text.errors.patternErrors.addAccountHead.headCode)
                .required(text.errors.requiredErrors.addAccountHead.headCode),
                mainHead: Yup.string()
                .required(text.errors.requiredErrors.addAccountHead.mainHead)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values, '* account head')
            resetForm()
        }
    })
    return{
        AddAccountHeadFormik
    }
}