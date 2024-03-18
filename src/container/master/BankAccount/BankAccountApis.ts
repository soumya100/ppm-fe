import { doGetApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getBankAccountApi = async(id: number)=>{
    let data = {
        url: endPoints?.getBankAccounts(id)
    }
    let res: any = await doGetApiCall(data)
    return res;
}