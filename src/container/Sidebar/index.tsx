"use client"
import SideBar from "@/components/sideBar"
import { useEffect } from "react"
import getSessionStorageData from "@/utils/getSessionStorageData"
import { SideBarHooks } from "./Hooks"

const SideBarContainer = ({}) => {
    const {finYearGetApiCall}= SideBarHooks()
    useEffect(() => {
        const token= getSessionStorageData('token')
        const organizationId= getSessionStorageData('orgId')
        if (organizationId && token) {
          finYearGetApiCall(organizationId)
        }
      }, [])
  return <SideBar />
}

export default SideBarContainer