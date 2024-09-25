import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Make sure this path is correct

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add your reducers here
  },
});

// Export types for later use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
