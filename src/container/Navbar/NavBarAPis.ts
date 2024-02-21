import { doGetApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getFinYearAPI = async(id: number) => {
    let data = {
        url: endPoints?.finYear(id),
    }
    let res: any = await doGetApiCall(data)
    return res;
}