import { doGetApiCall, doPostApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getPumpListAPI = async(id: number)=>{
    let data = {
        url: endPoints?.getPumpList(id)
    }
    let res: any = await doGetApiCall(data)
    return res;
}


export const postPumpMasterAPI= async(body: any)=>{
    let data = {
        url: endPoints?.postPumpMaster,
        bodyData: body,
    }
    let res: any = await doPostApiCall(data)
    return res;
}
