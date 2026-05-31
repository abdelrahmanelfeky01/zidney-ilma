import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const generalReducer = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleDarkMode } = generalReducer.actions;

export default generalReducer.reducer;
