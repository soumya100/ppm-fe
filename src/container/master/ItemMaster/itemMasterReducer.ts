import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    itemMasterUnit:[],
    itemMasterCategory:[],
    itemMasterData:[]
};
const itemMasterSlice = createSlice({
    name: 'itemMasterData',
    initialState,
    reducers: {
        getItemMasterUnit: (state, action) => {
            state.itemMasterUnit = action.payload;
        },
        getItemMasterCategory: (state, action) =>{
            state.itemMasterCategory = action.payload
        },
        getItemMaster:(state, action)=>{
            state.itemMasterData= action.payload
        }
    },
});
export const { getItemMasterUnit, getItemMasterCategory, getItemMaster } = itemMasterSlice.actions;
export default itemMasterSlice.reducer;