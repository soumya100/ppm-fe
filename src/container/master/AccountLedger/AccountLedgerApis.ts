import { doGetApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getAccountLedgerApi = async(id: number)=>{
    let data = {
        url: endPoints?.getAccountLedger(id)
    }
    let res: any = await doGetApiCall(data)
    return res;
}