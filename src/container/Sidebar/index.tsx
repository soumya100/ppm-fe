"use client"
import SideBar from "@/components/sideBar"
import { useEffect } from "react"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { SideBarHooks } from "./Hooks"

const SideBarContainer = ({ }) => {
  const { finYearGetApiCall, logOutGetApiCall,
    getSideBarDataApiCall, handleSubMenu,
    openMenuId, handleSubMenuClose} = SideBarHooks()
  useEffect(() => {
    const token = getSessionStorageData('token')
    const organizationId = getSessionStorageData('orgId')
    if (organizationId && token) {
      finYearGetApiCall(organizationId)
    }
    if (token) {
      getSideBarDataApiCall()
    }
  }, [])
  return <SideBar logOutGetApiCall={logOutGetApiCall}
    handleSubMenu={handleSubMenu}
    openMenuId={openMenuId}
    handleSubMenuClose={handleSubMenuClose}
  />
}

export default SideBarContainer