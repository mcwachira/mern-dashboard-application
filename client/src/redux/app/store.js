import { configureStore } from "@reduxjs/toolkit";
import globalReducer from '../features/globalSlice'



const store = configureStore({
    reducer: {
        mode: globalReducer,

    },
})

export default store