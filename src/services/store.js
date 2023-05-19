import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";


export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})


//reducer - grab what we need
//middleware -