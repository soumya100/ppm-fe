import PumpMaster from "@/components/master/pumpMaster"
import { PumpMasterHooks } from "./Hooks"

const PumpMasterContainer = () => {
    const {AddPumpMasterFormik}=PumpMasterHooks()
  return (
    <PumpMaster formik={AddPumpMasterFormik}/>
  )
}

export default PumpMasterContainer
