"use client"
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import demoSlice from './demoReducer' // <--- Not for use, this is just an example
import navSlice from '@/container/Navbar/NavBarReducer'
import sideBarSlice from '@/container/Sidebar/SideBarReducer'
import unitMasterSlice from '@/container/UnitMaster/UnitMasterReducer'

export const store = configureStore({
    reducer: {
        abc: demoSlice, // <--- Not for use, this is just an example
        navbarData: navSlice,
        sideBarData: sideBarSlice,
        unitMasterData: unitMasterSlice 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});