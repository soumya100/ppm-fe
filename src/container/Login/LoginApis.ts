import { doPostApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const adminLoginAPI = async (body: any) => {
    let data = {
        url: 'http://115.187.40.33/api/admin/login',
        bodyData: body,
    }
    let res: any = await doPostApiCall(data)
    return res;
}