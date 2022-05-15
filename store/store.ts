import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter";

export const store = configureStore({
  reducer: {
    Counter: counter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
