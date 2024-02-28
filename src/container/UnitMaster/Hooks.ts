import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'

export const UnitMasterHooks = () => {

    //modal functionalities
    const [openFormDialog, setOpenFormDialog] = useState(false)

    //modal open
    const handleOpenDialog = () => {
        setOpenFormDialog(true)
    }

    //modal close
    const handleCloseModal=()=>{
        setOpenFormDialog(false)
    }

    // unitmaster add formik
    const AddUnitMasterFormik = useFormik({
        initialValues: {
            unitMaster: ''
        },
        validationSchema: Yup.object().shape({
            unitMaster: Yup.string()
                .required(text.errors.requiredErrors.unitMaster)
           
        }),
        onSubmit: (values, { resetForm }) => {
          console.log(values, '* unit master data')
        }
    })

    return {
        openFormDialog,
        handleOpenDialog,
        handleCloseModal,
        AddUnitMasterFormik
    }
}