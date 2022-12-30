import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'dark',
    userId: "63701cc1f032390a3400031a"
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer