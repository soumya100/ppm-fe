import { useState } from "react";

export const NavbarHooks = () => {
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

    return {
        openAvatar,
        anchorEl,
        handleAvatarClose,
        handleAvatarOpen,
        openHamDrawer,
        handleToggleHamDrawer
    }
}