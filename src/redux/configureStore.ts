"use client"
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import demoSlice from './demoReducer' // <--- Not for use, this is just an example
import navSlice from '@/container/Navbar/NavBarReducer'
import sideBarSlice from '@/container/Sidebar/SideBarReducer'
import unitMasterSlice from '@/container/master/UnitMaster/UnitMasterReducer'
import itemCategorySlice from '@/container/master/ItemCategory/ItemCategoryReducer'
import itemMasterSlice from '@/container/master/ItemMaster/itemMasterReducer'
import tankMasterSlice from '@/container/master/TankMaster/TankMasterReducer'
import shiftMasterSlice from '@/container/master/ShiftMaster/ShiftMasterReducer'
import pumpMasterSlice from '@/container/master/PumpMaster/PumpMasterReducer'

export const store = configureStore({
    reducer: {
        abc: demoSlice, // <--- Not for use, this is just an example
        navbarData: navSlice,
        sideBarData: sideBarSlice,
        unitMasterData: unitMasterSlice,
        itemCategoryData: itemCategorySlice,
        itemMasterData: itemMasterSlice,
        tankMasterData: tankMasterSlice,
        shiftMasterData: shiftMasterSlice,
        pumpMasterData: pumpMasterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});