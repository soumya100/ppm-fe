import { doGetApiCall, doPostApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getItemMasterDropDownAPI = async(id: number, type: 'unit' | 'category')=>{
    let url;
    switch(type){
        case 'unit':
            url=endPoints?.getItemMasterUnit(id)
            break;
        case 'category':
           url=endPoints?.getItemMasterCategory(id)
            break;
    }
    let data = {
        url: url
    }
    let res: any = await doGetApiCall(data)
    return res;
}

export const postItemMasterAPI= async(body: any)=>{
    let data = {
        url: endPoints?.postItemMaster,
        bodyData: body,
    }
    let res: any = await doPostApiCall(data)
    return res;
}