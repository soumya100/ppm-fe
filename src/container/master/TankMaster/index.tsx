"use client"
import TankMaster from '@/components/master/tankMaster'
import React, { useEffect } from 'react'
import { TankMasterHooks } from './Hooks'
import { ItemMasterHooks } from '../ItemMaster/Hooks'

const TankMasterContainer = () => {
    const { TankMasterFormik,
        handleOpenDrawer,
        handleCloseDrawer,
        openTankMasterDrawer,
        getTankApiCall,
        orgId,
        token,
        postLoaders,
        loader,
        handleEditData
    } = TankMasterHooks()

    const { getItemApiCall } = ItemMasterHooks()


    useEffect(() => {
        if (token && orgId) {
            getTankApiCall(orgId)
            getItemApiCall(orgId)
        }
    }, [orgId, token])
    return (
        <TankMaster tankMasterFormik={TankMasterFormik}
            handleOpenDrawer={handleOpenDrawer}
            handleCloseDrawer={handleCloseDrawer}
            openTankMasterDrawer={openTankMasterDrawer}
            token={token}
            loader={loader}
            postLoaders={postLoaders}
            handleEditData={handleEditData}
        />
    )
}

export default TankMasterContainer
