"use client"
import ShiftMaster from "@/components/master/ShiftMaster"
import { ShiftMasterHooks } from "./Hooks"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { useEffect } from "react"

const ShiftMasterContainer = () => {

  const token = getSessionStorageData('token')
  const orgId = getSessionStorageData('orgId')
  const { AddShiftFormik, getShiftApiCall, loader, handleTimeRange,
    timeRange,
    timeRangeError,
    handleTimeRangeError } = ShiftMasterHooks()

  useEffect(() => {
    if (token && orgId) {
      getShiftApiCall(orgId)
    }
  }, [token, orgId])


  return <ShiftMaster formik={AddShiftFormik}
    loader={loader}
    token={token}
    handleTimeRange={handleTimeRange}
    timeRange={timeRange}
    timeRangeError={timeRangeError}
    handleTimeRangeError={handleTimeRangeError}
  />
}

export default ShiftMasterContainer