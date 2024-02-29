import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'

export const ItemMasterHooks = () => {
    const [openItemMaster, setOpenItemMaster] = useState(false)

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
            rememberQnty: 0
        },
        validationSchema: Yup.object().shape({
            itemName: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.itemName),
            itemShortName: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.itemShortName),
            itemType: Yup.string()
                .required(text.errors.requiredErrors.addItemMaster.itemType),
            unitValue: Yup.number()
                .lessThan(1,)
                .required(text.errors.requiredErrors.addItemMaster.unitValue),
            unit: Yup.string()
            .required(text.errors.requiredErrors.addItemMaster.unit),
            cst: Yup.number()
            .lessThan(1,)
            .required(text.errors.requiredErrors.addItemMaster.cst),
            sgst: Yup.number()
            .lessThan(1,)
            .required(),
            igst: Yup.number()
            .lessThan(1,)
            .required(),
            basicSaleRate: Yup.number()
            .lessThan(1,)
            .required(),
            rememberQnty: Yup.number()
            .lessThan(1,)
            .required(),

        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values, '* item category data')
            resetForm()
            setOpenItemMaster(false)
        }
    })
    //handle open drawer
    const handleOpenDrawer = () => {
        setOpenItemMaster(true)
    }

    //handle close drawer 
    const handleCloseDrawer = () => {
        setOpenItemMaster(false)
        AddItemMasterFormik.resetForm()
    }


    return {
        handleCloseDrawer,
        handleOpenDrawer,
        openItemMaster
    }
}