import { useFormik } from "formik";
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pathName } from "@/utils/route";
import { adminLoginAPI } from "./LoginApis";
import toast from "react-hot-toast";

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
             if(res.message==='Login Successful'){
                resetForm();
                toast.success('LoggedIn Successfully')
                // console.log('hello world')
                router.push(pathName.dashboard)
                sessionStorage.setItem("token", res.token)
                sessionStorage.setItem("orgId", res.org_id)
                sessionStorage.setItem("orgName", res.org_name)
             }else{
                toast.error(res.message)
             }
            })
            .catch((err) => {
                console.error(err)
                toast.error('Something went wrong')
            }).finally(()=>{
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