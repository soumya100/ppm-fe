import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useState } from "react"
import { useSelector } from "react-redux"

export const PumpMasterHooks = () => {

    const[showNozzleForm, setShowNozzleForm]=useState<boolean>(false)
    const[addNozzleData, setAddNozzleData]: any=useState([])
    const[tankName, setTankName]= useState<string>('')

    const tankMasterData = useSelector((state: any) => state.tankMasterData?.tankMasterData)?.map((data: any)=>{
       return{
           name:data.Tank_Name ,
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
            setShowNozzleForm(true)
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
           const tankData= tankMasterData && tankMasterData.filter((data: any)=>data.value === values.tankName)
            setAddNozzleData((prev: any)=>[...prev, {nozzleName: values.nozzleName, 
                tankId:tankData[0].value, tankName:tankData[0].name}])
            resetForm()
        }
    })
    return{
        AddPumpMasterFormik,
        showNozzleForm,
        AddNozzleFormik,
        addNozzleData,
        tankMasterData
    }
}