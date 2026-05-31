import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./generalSlice";

const store = configureStore({
  reducer: { general: generalReducer },
});

export default store;
