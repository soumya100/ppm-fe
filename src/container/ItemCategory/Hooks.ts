import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import getSessionStorageData from "@/utils/getSessionStorageData"
import { getItemCategoryDataAPI, postItemCategoryAPI, updateItemCategoryAPI } from "./ItemCategoryApis"
import { useDispatch } from "react-redux"
import { getItemCategoryData } from "./ItemCategoryReducer"
import toast from "react-hot-toast"

export const ItemCategoryHooks = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [postLoaders, setPostLoaders] = useState(false)
    const [editData, setEditData]=useState<any>(null)
    const [openAddItemModal, setOpenAddItemModal] = useState(false)

    const orgId = getSessionStorageData('orgId')
    
    //edit functionality
    const handleEditData=(data: any)=>{
        setOpenAddItemModal(true)
        setEditData(data)
    }


    // item category add formik
    const AddItemCategoryFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            itemCategory: editData && Object.keys(editData)?.length > 0 ? editData.Catagary_Name :  ''
        },
        validationSchema: Yup.object().shape({
            itemCategory: Yup.string()
                .required(text.errors.requiredErrors.itemCategory)

        }),
        onSubmit: (values, { resetForm }) => {
            if(editData && Object.keys(editData)?.length > 0)
            {
                updateItemCategoryApiCall(editData.Id, values, resetForm)
            }else{
                postItemCategoryApiCall(values, resetForm)
            }
            
        }
    })

    //open modal state
    const handleOpenModal = () => {
        setOpenAddItemModal(true)
    }

    //close modal state
    const handleCloseModal = () => {
        setOpenAddItemModal(false)
        AddItemCategoryFormik.resetForm()
    }


    //get api call for item category
    const getItemCategoryApiCall = async (id: number) => {
        setLoading(true)
        let res: any = await getItemCategoryDataAPI(id)
        if (res.messsage === 'Data Found') {
            dispatch(getItemCategoryData(res.Data))
            setLoading(false)
        } else {
            dispatch(getItemCategoryData([]))
            setLoading(false)
        }
    }

    //item category post api call
    const postItemCategoryApiCall = async (item: any, resetForm: any) => {
        setPostLoaders(true);
        let bodyData = {
            cat_name: item.itemCategory,
            org_id: orgId,
        }
        postItemCategoryAPI(bodyData)
            .then((res: any) => {
                console.log(res, '* res')
                if (res.Message === 'Catagary Create Successful') {
                    setOpenAddItemModal(false)
                    getItemCategoryApiCall(orgId)
                    toast.success('Item category created successfully')
                    setPostLoaders(false)
                    setEditData(null)
                    resetForm()
                } else {
                    toast.error(res.Message)
                    setPostLoaders(false)
                }
            })
            .catch((err) => {
                console.error(err)
                setPostLoaders(false)
            })
    }

    //update unit master api call
    const updateItemCategoryApiCall = async (unitId: number, item: any, resetForm: any) => {
        setPostLoaders(false)
        let bodyData = {
            cat_id: unitId,
            cat_name: item.itemCategory,
            org_id: orgId,
        }
        let res: any = await updateItemCategoryAPI(bodyData)
        if(res.Message === 'Catagary Update Successful'){
            getItemCategoryApiCall(orgId)
            toast.success('Item category edited successfully')
            handleCloseModal()
            setEditData(null)
            resetForm()
            setPostLoaders(false)
        }else{
            toast.error(res.Message)
            setPostLoaders(false)
        }
    }

    return {
        handleOpenModal,
        handleCloseModal,
        openAddItemModal,
        AddItemCategoryFormik,
        getItemCategoryApiCall,
        handleEditData,
        loading,
        postLoaders
    }
}