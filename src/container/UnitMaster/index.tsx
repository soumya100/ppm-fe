"use client"
import UnitMaster from "@/components/unitMaster"
import { UnitMasterHooks } from "./Hooks"
import { useEffect } from "react"
import getSessionStorageData from "@/utils/getSessionStorageData"

const UnitMasterContainer = () => {
    const orgId = getSessionStorageData('orgId')
    const { openFormDialog,
        handleOpenDialog,
        handleCloseModal,
        AddUnitMasterFormik,
        getUnitMasterDataApiCall,
        handleEditData,
        loading,
        postLoaders
    } = UnitMasterHooks()

    useEffect(() => {
        getUnitMasterDataApiCall(orgId)
    }, [orgId])

    return <UnitMaster
        openFormDialog={openFormDialog}
        handleOpenDialog={handleOpenDialog}
        handleCloseModal={handleCloseModal}
        AddUnitMasterFormik={AddUnitMasterFormik}
        handleEditData={handleEditData}
        loading={loading}
        postLoaders={postLoaders}
    />
}

export default UnitMasterContainer