import { doGetApiCall, doPostApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getShiftMasterAPI = async(id: number)=>{
    let data = {
        url: endPoints?.getShiftMaster(id),
    }
    let res: any = await doGetApiCall(data)
    return res;
}

export const postShiftMasterAPI= async(body: any)=>{
    let data = {
        url: endPoints?.postShiftMaster,
        bodyData: body,
    }
    let res: any = await doPostApiCall(data)
    return res;
}