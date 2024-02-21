import { useState } from "react";
import { getFinYearAPI } from "./NavBarAPis";
import { useDispatch } from "react-redux";
import { getNavData } from "./NavBarReducer";

export const NavbarHooks = () => {

    //dispatch function
    const dispatch= useDispatch()

    //open menu states
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openAvatar = Boolean(anchorEl);
    const handleAvatarOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    //Ham drawer states
    const [openHamDrawer, setOpenHamDrawer]= useState<boolean>(false)

    const handleToggleHamDrawer=()=>{
        setOpenHamDrawer(prev=>!prev)
    }

    const finYearGetApiCall= async (orgId: number)=>{
        let res: any = await getFinYearAPI(orgId)
        if(res.messsage === "Data Found"){
            dispatch(getNavData([res.Data[0]]))
            // console.log(res.Data)
        }else{
            dispatch(getNavData([]))
        }
    }

    return {
        openAvatar,
        anchorEl,
        handleAvatarClose,
        handleAvatarOpen,
        openHamDrawer,
        handleToggleHamDrawer,
        finYearGetApiCall
    }
}