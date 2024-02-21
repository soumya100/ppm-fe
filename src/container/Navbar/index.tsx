"use client"
import Navbar from "@/components/navbar"
import { NavbarHooks } from "./Hooks"
import { useEffect } from "react";
import getSessionStorageData from "@/utils/getSessionStorageData";

const NavBarContainer = () => {

  const {anchorEl, handleAvatarClose, handleAvatarOpen,
    openAvatar,openHamDrawer,
    handleToggleHamDrawer, finYearGetApiCall}=NavbarHooks();
    const organizationId= getSessionStorageData('orgId')
    useEffect(() => {
     finYearGetApiCall(organizationId)
    }, [organizationId])
    
  return <Navbar anchorEl={anchorEl}
   handleAvatarClose={handleAvatarClose}
   handleAvatarOpen={handleAvatarOpen}
   handleToggleHamMenu={handleToggleHamDrawer} 
   openAvatar={openAvatar}
   openHamMenu={openHamDrawer}
  />
}

export default NavBarContainer