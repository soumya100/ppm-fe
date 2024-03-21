import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { getItemMasterDropDownAPI, postItemMasterAPI } from "./itemMasterApis"
import { useDispatch } from "react-redux"
import { getItemMaster, getItemMasterCategory, getItemMasterUnit } from "./itemMasterReducer"
import toast from "react-hot-toast"
import getSessionStorageData from "@/utils/getSessionStorageData"

export const ItemMasterHooks = () => {
    const dispatch = useDispatch()
    const orgId = getSessionStorageData('orgId')
    const [openItemMaster, setOpenItemMaster] = useState<boolean>(false)
    const [postLoaders, setPostLoaders] = useState<boolean>(false)
    const [loader, setLoader]= useState<boolean>(false)
    const [editData, setEditData]: any= useState(null)

    // item master add formik
    const AddItemMasterFormik = useFormik({
        initialValues: {
            itemName: '',
            itemShortName: '',
            itemType: '',
            unitValue: 0,
            unit: '',
            cst: 0,
            sgst: 0,
            igst: 0,
            basicSaleRate: 0,
            rememberQnty: 0,
            openingQnty: 0,
            openingRate: 0
        },
        validationSchema: Yup.object().shape({
            itemName: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.itemName),
            itemShortName: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.itemShortName),
            itemType: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.itemType),
            unitValue: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.unitValue)
                .required(text.errors.requiredErrors.addItemMaster.unitValue),
            unit: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.unit),
            cst: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.cst)
                .required(text.errors.requiredErrors.addItemMaster.cst),
            sgst: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.sgst)
                .required(text.errors.requiredErrors.addItemMaster.sgst),
            igst: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.igst),
                // .required(text.errors.patternErrors.addItemMaster.igst),
            basicSaleRate: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.basicSaleRate)
                .required(text.errors.requiredErrors.addItemMaster.basicSaleRate),
            rememberQnty: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.rememberQnty)
                .required(text.errors.requiredErrors.addItemMaster.rememberQnty),
            openingQnty: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.openingQnty)
                .required(text.errors.requiredErrors.addItemMaster.openingQnty),
            openingRate: Yup.number()
                .positive(text.errors.patternErrors.addItemMaster.openingRate)
                .required(text.errors.requiredErrors.addItemMaster.openingRate)
        }),
        onSubmit: (values, { resetForm }) => {
            postItemApiCall(orgId, values, resetForm)
        }
    })
    
    //handle open drawer
    const handleOpenDrawer = () => {
        setOpenItemMaster(true)
    }

    //handle close drawer 
    const handleCloseDrawer = () => {
        setOpenItemMaster(false)
        setEditData(null)
        AddItemMasterFormik.resetForm()
    }

   
    //item master dropdown unit api call
    const getItemMasterUnitApiCall = async (id: number) => {
        getItemMasterDropDownAPI(id, 'unit').then((res: any) => {
            if (res.message === 'Data Found') {
                dispatch(getItemMasterUnit(res.Data))
            } else {
                dispatch(getItemMasterUnit([]))
            }
        }).catch((err: any) => {
            console.log(err)
            toast.error('Something went wrong')
            dispatch(getItemMasterUnit([]))
        })
    }

    //item master dropdown category 
    const getItemMasterCategoryApiCall = async (id: number) => {
        getItemMasterDropDownAPI(id, 'category').then((res: any) => {
            if (res.status === 200) {
                dispatch(getItemMasterCategory(res.Data))
            } else {
                dispatch(getItemMasterCategory([]))
            }
        }).catch((err: any) => {
            console.log(err)
            toast.error('Something went wrong')
            dispatch(getItemMasterCategory([]))
        })
    }

    //item get api call
    const getItemApiCall = async (id: number) => {
        setLoader(true)
        getItemMasterDropDownAPI(id, 'item').then((res: any) => {
            if (res.status === 200) {
                dispatch(getItemMaster(res.Data))
            } else {
                dispatch(getItemMaster([]))
            }
        }).catch((err: any) => {
            console.log(err)
            toast.error('Something went wrong')
            dispatch(getItemMaster([]))
        }).finally(()=>{
            setLoader(false)
        })
    }

    //item post api call
    const postItemApiCall = async (orgId: number, item: any, resetForm: any) => {
        setPostLoaders(true);
        let bodyData = {
            item_name: item.itemName,
            item_sh_name: item.itemShortName,
            item_type: item.itemType,
            unit_val: item.unitValue,
            item_unit: item.unit,
            cgst_val: item.cst,
            sgst_val: item.sgst,
            igst_val: item.igst ?? 0,
            basic_sale_rate: item.basicSaleRate,
            remember_qnty: item.rememberQnty,
            open_qnty: item.openingQnty,
            open_rate: item.openingRate,
            org_id: orgId
        }
        postItemMasterAPI(bodyData)
            .then((res: any) => {
                if (res.status === 200) {
                   setOpenItemMaster(false)
                   getItemApiCall(orgId)
                    toast.success('Item category created successfully')
                    // setEditData(null)
                    resetForm()
                } else {
                    toast.error(res.message)
                }
            })
            .catch((err) => {
                console.error(err)
                toast.error('Something went wrong')
                setPostLoaders(false)
            }).finally(() => {
                setPostLoaders(false)
            })
    }

    return {
        handleCloseDrawer,
        handleOpenDrawer,
        openItemMaster,
        AddItemMasterFormik,
        getItemMasterUnitApiCall,
        getItemMasterCategoryApiCall,
        postLoaders,
        getItemApiCall,
        loader
    }
}