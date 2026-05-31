import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./utils/i18n/i18n.js";
import { Provider } from "react-redux";
import store from "./store/store.js";"react-router-dom";
import LoaderIndicator from "./ui/LoaderIndicator.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
