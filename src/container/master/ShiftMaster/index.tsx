"use client"
import ShiftMaster from "@/components/master/ShiftMaster"
import { ShiftMasterHooks } from "./Hooks"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { useEffect } from "react"

const ShiftMasterContainer= () => {
    
  const token=getSessionStorageData('token')
  const orgId=getSessionStorageData('orgId')
  const {AddShiftFormik, getShiftApiCall, loader}=ShiftMasterHooks()
  
  useEffect(() => {
    if(token && orgId){
      getShiftApiCall(orgId)
    }
  }, [token, orgId])
  

  return <ShiftMaster formik={AddShiftFormik} loader={loader}/>
}

export default ShiftMasterContainer