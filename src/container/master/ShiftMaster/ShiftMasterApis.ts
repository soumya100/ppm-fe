import { doGetApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getShiftMasterAPI = async(id: number)=>{
    let data = {
        url: endPoints?.getShiftMaster(id),
    }
    let res: any = await doGetApiCall(data)
    return res;
}