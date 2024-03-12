"use client"
import PumpMaster from "@/components/master/pumpMaster"
import { PumpMasterHooks } from "./Hooks"
import { TankMasterHooks } from "../TankMaster/Hooks"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { useEffect } from "react"

const PumpMasterContainer = () => {

  const token=getSessionStorageData('token')
  const orgId=getSessionStorageData('orgId')
  const {getTankApiCall}=TankMasterHooks()
  const { AddPumpMasterFormik, showNozzleForm,
    AddNozzleFormik, addNozzleData, 
    tankMasterData, getPumpMasterApiCall,
    loader, nozzleNumberError,
    handleNozzleDelete, addDataToApi
   } = PumpMasterHooks()

  useEffect(() => {
    if(token && orgId){
      getTankApiCall(orgId)
      getPumpMasterApiCall(orgId)
    }
  }, [orgId && token])
  
  return (
    <PumpMaster formik={AddPumpMasterFormik}
    showNozzleForm={showNozzleForm}
    addNozzleForm={AddNozzleFormik}
    addNozzleData={addNozzleData}
    tankMasterData={tankMasterData}
    loader={loader}
    nozzleNumberError={nozzleNumberError}
    handleNozzleDelete={handleNozzleDelete}
    addDataToApi={addDataToApi}
    />
  )
}

export default PumpMasterContainer
