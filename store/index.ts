import { configureStore } from "@reduxjs/toolkit";
import orderSlice from './slices/orderSlice'
export const store = configureStore({
  reducer: {
    order:orderSlice,
  },
  devTools: true,
});

// Types (VERY IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;