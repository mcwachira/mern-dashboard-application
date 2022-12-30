import { configureStore } from "@reduxjs/toolkit";
import globalReducer from '../features/globalSlice'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "../apis/api";



const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer,

    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
})

setupListeners(store.dispatch)

export default store