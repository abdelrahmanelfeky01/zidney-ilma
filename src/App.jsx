import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Toaster from "./ui/ToasterComponent";
import AppInitializer from "./components/AppInitializer";

function App() {
  return (
    <BrowserRouter>
      <AppInitializer />
      <AppRoutes />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
