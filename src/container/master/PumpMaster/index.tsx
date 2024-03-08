"use client"
import PumpMaster from "@/components/master/pumpMaster"
import { PumpMasterHooks } from "./Hooks"
import { TankMasterHooks } from "../TankMaster/Hooks"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { useEffect } from "react"

const PumpMasterContainer = () => {
  const { AddPumpMasterFormik, showNozzleForm,AddNozzleFormik, addNozzleData, tankMasterData } = PumpMasterHooks()
  const token=getSessionStorageData('token')
  const orgId=getSessionStorageData('orgId')
  const {getTankApiCall}=TankMasterHooks()

  useEffect(() => {
    if(token && orgId){
      getTankApiCall(orgId)
    }
  }, [orgId && token])
  
  return (
    <PumpMaster formik={AddPumpMasterFormik}
    showNozzleForm={showNozzleForm}
    addNozzleForm={AddNozzleFormik}
    addNozzleData={addNozzleData}
    tankMasterData={tankMasterData}
    />
  )
}

export default PumpMasterContainer
