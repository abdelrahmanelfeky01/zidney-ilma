import { createSlice } from "@reduxjs/toolkit";

// Get Saved Theme
const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "night";
};

// Define Initial State
const initialState = {
  isDark: getInitialTheme(),
};

// Add current theme to "data-theme" to html
document.documentElement.setAttribute(
  "data-theme",
  initialState.isDark ? "night" : "light",
);

// Slice
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
      localStorage.setItem("theme", state.isDark ? "night" : "light");
    },
  },
});

// Exports
export const { toggleDarkMode } = generalReducer.actions;

export default generalReducer.reducer;
