import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'

export const ItemCategoryHooks=()=>{

    const [openAddItemModal, setOpenAddItemModal]=useState(false)

    //open modal state
    const handleOpenModal=()=>{
        setOpenAddItemModal(true)
    }

    //close modal state
    const handleCloseModal=()=>{
        setOpenAddItemModal(false)
    }
// unitmaster add formik
const AddItemCategoryFormik = useFormik({
    initialValues: {
        itemCategory: ''
    },
    validationSchema: Yup.object().shape({
        itemCategory: Yup.string()
            .required(text.errors.requiredErrors.itemCategory)
       
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values, '* item category data')
      resetForm()
      handleCloseModal()
    }
})
    return{
        handleOpenModal,
        handleCloseModal,
        openAddItemModal,
        AddItemCategoryFormik
    }
}