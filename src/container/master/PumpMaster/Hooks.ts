import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPumpListAPI } from "./PumpMasterApi"
import { getPumpMasterData } from "./PumpMasterReducer"
import toast from "react-hot-toast"

export const PumpMasterHooks = () => {

    const dispatch=useDispatch()
    const [showNozzleForm, setShowNozzleForm] = useState<boolean>(false)
    const [addNozzleData, setAddNozzleData]: any = useState([])
    const[loader, setLoader]=useState<boolean>(false)
    const[nozzleNumberError,setNozzleNumberError]=useState<boolean>(false)
    const[nozzleNumber, setNozzleNumber]=useState<number>(0)

    const tankMasterData = useSelector((state: any) => state.tankMasterData?.tankMasterData)?.map((data: any) => {
        return {
            name: data.Tank_Name,
            value: data.Id
        }
    })

    // pump master add formik
    const AddPumpMasterFormik = useFormik({
        initialValues: {
            pumpName: '',
            nozzleNumber: 0,
            // nozzleName: ''
        },
        validationSchema: Yup.object().shape({
            pumpName: Yup.string()
                .required(text.errors.requiredErrors.addPumpMaster.pumpName),
            nozzleNumber: Yup.number()
                .positive(text.errors.patternErrors.addPumpMaster.nozzleNumber)
                .required(text.errors.requiredErrors.addPumpMaster.nozzleNumber),
            // nozzleName: Yup.string()
            //     .required(text.errors.requiredErrors.addPumpMaster.nozzleName)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values, '* values')
            setNozzleNumber(values.nozzleNumber)
            setShowNozzleForm(true)
            resetForm()
        }
    })

    // add Nozzle formik
    const AddNozzleFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nozzleName: '',
            tankName: '',
            // nozzleName: ''`
        },
        validationSchema: Yup.object().shape({
            nozzleName: Yup.string()
                .required(text.errors.requiredErrors.addPumpMaster.nozzleName),
            tankName: Yup.string()
                .required(text.errors.requiredErrors.addPumpMaster.selectTank),
            // nozzleName: Yup.string()
            //     .required(text.errors.requiredErrors.addPumpMaster.nozzleName)
        }),
        onSubmit: (values, { resetForm }) => {
            const tankData = tankMasterData && tankMasterData.filter((data: any) => data.value === values.tankName)
            // if(nozzleNumber<=addNozzleData.length ){
                // console.log(nozzleNumber, '* noz no')
                // console.log(addNozzleData.length, '* noz data len')
                if(nozzleNumber>addNozzleData.length){
                    setAddNozzleData((prev: any) => [...prev, {
                        nozzleName: values.nozzleName,
                        tankId: tankData[0].value, tankName: tankData[0].name
                    }])
                }else{
                setNozzleNumberError(true)
            }
            resetForm()
        }
    })

    //get pump master data
    const getPumpMasterApiCall = async (id: number) => {
        setLoader(true)
        getPumpListAPI(id).then((res: any) => {
            // console.log(res)
            if (res.messsage === 'Data Found') {
                dispatch(getPumpMasterData(res.Data))
            } else {
                dispatch(getPumpMasterData([]))
            }
        }).catch((err: any) => {
            toast.error(err)
            toast.error('Something went wrong')
            dispatch(getPumpMasterData([]))
        }).finally(() => {
            setLoader(false)
        })
    }

    //handle nozzle delete functionality
    const handleNozzleDelete=(id: number)=>{
        setAddNozzleData((prev: any)=> prev.filter(( _: any,index: number)=>index !== id))
    }
    //post data to api
    const addDataToApi=()=>{
        console.log(addNozzleData, '* nozzle data')
        setShowNozzleForm(false)
        setNozzleNumberError(false)
        setAddNozzleData([])
    }
    return {
        AddPumpMasterFormik,
        showNozzleForm,
        AddNozzleFormik,
        addNozzleData,
        tankMasterData,
        getPumpMasterApiCall,
        loader,
        nozzleNumberError,
        handleNozzleDelete,
        addDataToApi
    }
}