import { useDispatch } from "react-redux"
import { getFinYearAPI } from "./SideBarApis"
import { getSideBarData } from "./SideBarReducer"

export const SideBarHooks=()=>{
    const dispatch= useDispatch()
    const finYearGetApiCall= async (orgId: number)=>{
        let res: any = await getFinYearAPI(orgId)
        if(res.messsage === "Data Found"){
            dispatch(getSideBarData([res.Data[0]]))
            // console.log(res.Data)
        }else{
            dispatch(getSideBarData([]))
        }
    }
    return {
        finYearGetApiCall
    }
}