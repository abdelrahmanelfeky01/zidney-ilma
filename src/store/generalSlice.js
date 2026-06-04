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
      document.documentElement.setAttribute(
        "data-theme",
        state.isDark ? "night" : "light",
      );
    },
  },
});

export const { toggleDarkMode } = generalReducer.actions;

export default generalReducer.reducer;
