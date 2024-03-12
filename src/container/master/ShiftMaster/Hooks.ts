import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useState } from "react"
import { getShiftMasterAPI } from "./ShiftMasterApis"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { getShiftMaster } from "./ShiftMasterReducer"

export const ShiftMasterHooks=()=>{

    const dispatch=useDispatch()
    const [loader, setLoader]= useState(false)


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

    //shift master get api
    const getShiftApiCall = async (id: number) => {
        setLoader(true)
        getShiftMasterAPI(id).then((res: any) => {
            // console.log(res)
            if (res.messsage === 'Data Found') {
                dispatch(getShiftMaster(res.Data))
            } else {
                dispatch(getShiftMaster([]))
            }
        }).catch((err: any) => {
            toast.error(err)
            toast.error('Something went wrong')
            dispatch(getShiftMaster([]))
        }).finally(() => {
            setLoader(false)
        })
    }

    return {
        AddShiftFormik,
        getShiftApiCall,
        loader
    }
}