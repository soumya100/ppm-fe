import { doGetApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getPumpListAPI = async(id: number)=>{
    let data = {
        url: endPoints?.getPumpList(id)
    }
    let res: any = await doGetApiCall(data)
    return res;
}