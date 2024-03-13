import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPumpListAPI } from "./PumpMasterApi"
import { getPumpMasterData } from "./PumpMasterReducer"
import toast from "react-hot-toast"
import { nozzleData } from "@/types/data-types"

interface pumpData {
    pumpName: string
    nozzleNumber: number
}


export const PumpMasterHooks = () => {

    const dispatch = useDispatch()
    const [showNozzleForm, setShowNozzleForm] = useState<boolean>(false)
    const [addNozzleData, setAddNozzleData]: any = useState([])
    const [loader, setLoader] = useState<boolean>(false)
    const [nozzleNumberError, setNozzleNumberError] = useState<string>('')
    const [pumpData, setPumpData] = useState<pumpData>({
        nozzleNumber: 0,
        pumpName: ''
    })
    const [editNozzle, setEditNozzle] = useState<nozzleData>({
        id: null,
        nozzleName: '',
        tankName: '',
        tankId: null
    })

    const tankMasterData = useSelector((state: any) => state.tankMasterData?.tankMasterData)?.map((data: any) => {
        return {
            name: data.Tank_Name,
            value: data.Id
        }
    })

    // pump master add formik
    const AddPumpMasterFormik = useFormik({
        enableReinitialize: true,
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
            setPumpData({
                nozzleNumber: values.nozzleNumber,
                pumpName: values.pumpName
            })
            setShowNozzleForm(true)
            resetForm()
        }
    })

    // add Nozzle formik
    const AddNozzleFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nozzleName: editNozzle && Object.keys(editNozzle).length > 0 && editNozzle.id !== null ? editNozzle.nozzleName : '',
            tankName: editNozzle && Object.keys(editNozzle).length > 0 && editNozzle.id !== null ? editNozzle.tankId : '',
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
            if (editNozzle && Object.keys(editNozzle).length > 0 && editNozzle.id !== null) {
                setAddNozzleData((prev: any) => prev.map((currRow: any, idx: number) => {
                    if (idx !== editNozzle.id) return currRow;
                    else return {
                        nozzleName: values.nozzleName,
                        tankId: tankData[0].value, tankName: tankData[0].name
                    };
                }))
                setEditNozzle({id: null,
                    nozzleName: '',
                    tankName: '',
                    tankId: null})
                resetForm()
            } else {
                if (pumpData.nozzleNumber > addNozzleData.length) {
                    setAddNozzleData((prev: any) => [...prev, {
                        nozzleName: values.nozzleName,
                        tankId: tankData[0].value, tankName: tankData[0].name
                    }])
                } else {
                    setNozzleNumberError('You cannot add more nozzles')
                }
                resetForm()
            }
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
    const handleNozzleDelete = (id: number) => {
        setAddNozzleData((prev: any) => prev.filter((_: any, index: number) => index !== id))
    }

    //handle nozzle edit functionality
    const handleNozzleEdit = (editData: nozzleData) => {
        // console.log(editData, '* edit')
        setEditNozzle({
            id: editData.id,
            nozzleName: editData.nozzleName,
            tankName: editData.tankName,
            tankId: editData.tankId
        })
    }


    //post data to api
    const addDataToApi = () => {
        if (addNozzleData.length < pumpData.nozzleNumber) {
            setNozzleNumberError(`please add ${pumpData.nozzleNumber - addNozzleData.length} more nozzles`)
        } else {
            console.log(addNozzleData, '* nozzle data')
            setShowNozzleForm(false)
            setNozzleNumberError('')
            setAddNozzleData([])
        }
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
        addDataToApi,
        handleNozzleEdit
    }
}