import { configureStore } from "@reduxjs/toolkit";
import orderSlice from './slices/orderSlice'
import authSlice from './slices/authSlice'
export const store = configureStore({
  reducer: {
    order:orderSlice,
    auth:authSlice
  },
  devTools: true,
});

// Types (VERY IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;