import { configureStore } from "@reduxjs/toolkit";
import sampleCountsReducer from "./sampleCountsSlice";

export const store = configureStore({
  reducer: {
    sampleCounts: sampleCountsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
