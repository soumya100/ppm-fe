import { doGetApiCall } from "@/utils/ApiConfig";
import { endPoints } from "@/utils/endPoints";

export const getItemMasterDropDownApi = async(id: number, type: 'unit' | 'category')=>{
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
