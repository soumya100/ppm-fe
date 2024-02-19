"use client"
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import demoSlice from './demoReducer' // <--- Not for use, this is just an example

export const store = configureStore({
    reducer: {
        abc: demoSlice, // <--- Not for use, this is just an example
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});