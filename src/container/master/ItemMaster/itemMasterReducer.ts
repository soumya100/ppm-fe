import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    itemMasterUnit:[],
    itemMasterCategory:[]
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
        }
    },
});
export const { getItemMasterUnit, getItemMasterCategory } = itemMasterSlice.actions;
export default itemMasterSlice.reducer;