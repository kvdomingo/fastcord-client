import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store/store.ts";

interface UISettingsState {
  showMembersList: boolean;
}

const initialState: UISettingsState = {
  showMembersList: true,
};

export const uiSettings = createSlice({
  name: "uiSettings",
  initialState,
  reducers: {
    setShowMembersList: (state, action: PayloadAction<boolean>) => {
      state.showMembersList = action.payload;
    },
  },
});

export const { setShowMembersList } = uiSettings.actions;

export const selectUISettings = (state: RootState) => state.uiSettings;

export default uiSettings.reducer;
