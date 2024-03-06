"use client"
import ItemMaster from "@/components/ItemMaster"
import { ItemMasterHooks } from "./Hooks"
import { useEffect } from "react"
import getSessionStorageData from "@/utils/getSessionStorageData"

const ItemMasterContainer = ({ }) => {
    const { handleCloseDrawer,
        handleOpenDrawer,
        openItemMaster,
        AddItemMasterFormik,
        getItemMasterUnitApiCall,
        getItemMasterCategoryApiCall
     } = ItemMasterHooks()

     const token=getSessionStorageData('token')
     const orgId=getSessionStorageData('orgId')
     useEffect(() => {
      if(orgId && token){
        getItemMasterUnitApiCall(orgId)
        getItemMasterCategoryApiCall(orgId)
      }
     }, [orgId, token])
     
    return <ItemMaster handleCloseDrawer={handleCloseDrawer}
        handleOpenDrawer={handleOpenDrawer}
        openItemMaster={openItemMaster}
        AddItemMasterFormik={AddItemMasterFormik}
        token={token}
         />
}

export default ItemMasterContainer