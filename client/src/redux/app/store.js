import { configureStore } from "@reduxjs/toolkit";
import globalReducer from '../features/globalSlice'



const store = configureStore({
    reducer: {
        global: globalReducer,

    },
})

export default store