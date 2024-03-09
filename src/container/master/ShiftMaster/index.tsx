"use client"
import ShiftMaster from "@/components/master/ShiftMaster"
import { ShiftMasterHooks } from "./Hooks"

const ShiftMasterContainer= () => {
    const {AddShiftFormik}=ShiftMasterHooks()
  return <ShiftMaster formik={AddShiftFormik}/>
}

export default ShiftMasterContainer