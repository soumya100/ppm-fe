import { useFormik } from "formik";
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { PASSWORD_REGEX } from "@/utils/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pathName } from "@/utils/route";
import { adminLoginAPI } from "./LoginApis";

export const LoginHooks = () =>{

    const [rememberMe, setRememberMe]= useState<boolean>(false)
    const[loading, setLoading]= useState<boolean>(false)
    const router= useRouter()

    // Login formik
    const LoginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email(text.errors.patternErrors.email)
                .required(text.errors.requiredErrors.email),
                password: Yup.string()
            // .matches(PASSWORD_REGEX, text.errors.patternErrors.password)
                .required(text.errors.requiredErrors.password),
           
        }),
        onSubmit: (values, { resetForm }) => {
            // console.log(values, '* data')
            // resetForm()
            // router.push(pathName.dashboard)
            adminLoginApiCall(values, resetForm)
        }
    })

    const handleRememberMe=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setRememberMe(event.target.checked)
    }

    const adminLoginApiCall = async (item: any, resetForm: any) => {
        setLoading(true);
        let bodyData = {
            email: item.email,
            password: item.password,
        }
     adminLoginAPI(bodyData)
            .then((res: any) => {
                setLoading(false)
             if(res.message==='Login Successful'){
                resetForm();
                router.push(pathName.dashboard)
                sessionStorage.setItem("token", res.token)
             }
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }
    return{
        LoginFormik,
        handleRememberMe,
        rememberMe,
        loading
    }
}