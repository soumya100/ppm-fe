"use client"
import UnitMaster from "@/components/unitMaster"
import { UnitMasterHooks } from "./Hooks"

const UnitMasterContainer = () => {
    const { openFormDialog,
        handleOpenDialog,
        handleCloseModal, 
        AddUnitMasterFormik
     } = UnitMasterHooks()
    return <UnitMaster
        openFormDialog={openFormDialog}
        handleOpenDialog={handleOpenDialog}
        handleCloseModal={handleCloseModal}
        AddUnitMasterFormik={AddUnitMasterFormik}
    />
}

export default UnitMasterContainer