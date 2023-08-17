import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
    name: 'title',
    initialState: {
        value: '首页'
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { update } = titleSlice.actions;

export default titleSlice.reducer;