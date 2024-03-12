import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    pumpMasterData:[]
};
const pumpMasterSlice = createSlice({
    name: 'pumpMasterData',
    initialState,
    reducers: {
        getPumpMasterData: (state, action) => {
            state.pumpMasterData = action.payload;
        }
    },
});
export const { getPumpMasterData } = pumpMasterSlice.actions;
export default pumpMasterSlice.reducer;