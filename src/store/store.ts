import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import authReducer from "@/store/authSlice.ts";
import uiSettingsReducer from "@/store/uiSettingsSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    uiSettings: uiSettingsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
