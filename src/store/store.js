import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { hostsSlice } from './hosts-slice.js'

const store = configureStore({
    reducer: {
        hosts: hostsSlice.reducer,
    },
    middleware: getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: true,
    }),
    devTools: false,
})

export default store
