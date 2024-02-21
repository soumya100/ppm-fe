import { doPostApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const adminLoginAPI = async (body: any) => {
    let data = {
        url: endPoints.login,
        bodyData: body,
    }
    let res: any = await doPostApiCall(data)
    return res;
}