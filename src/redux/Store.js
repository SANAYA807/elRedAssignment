import { configureStore } from '@reduxjs/toolkit'
import appReducerSlice from './Reducer';

const store = configureStore({
    reducer: {
        app: appReducerSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;


