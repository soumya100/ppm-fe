"use client"
import ItemMaster from "@/components/ItemMaster"
import { ItemMasterHooks } from "./Hooks"

const ItemMasterContainer = ({ }) => {
    const { handleCloseDrawer,
        handleOpenDrawer,
        openItemMaster,
        AddItemMasterFormik
     } = ItemMasterHooks()
    return <ItemMaster handleCloseDrawer={handleCloseDrawer}
        handleOpenDrawer={handleOpenDrawer}
        openItemMaster={openItemMaster}
        AddItemMasterFormik={AddItemMasterFormik}
         />
}

export default ItemMasterContainer