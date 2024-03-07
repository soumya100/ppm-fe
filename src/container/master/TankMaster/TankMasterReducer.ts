import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
   tankMasterData:[]
};
const tankMasterSlice = createSlice({
    name: 'tankMasterData',
    initialState,
    reducers: {
        getTankMasterData: (state, action) => {
            state.tankMasterData = action.payload;
        }
    },
});
export const { getTankMasterData } = tankMasterSlice.actions;
export default tankMasterSlice.reducer;