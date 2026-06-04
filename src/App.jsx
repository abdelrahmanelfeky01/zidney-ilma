import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./features/homePage/HomePage";
import PageNotFound from "./ui/PageNotFound";
import CoursesPage from "./features/coursesPage/CoursesPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginPage from "./features/loginPage/LoginPage";
import RegisterPage from "./features/registerPage/RegisterPage";
import { useTranslation } from "react-i18next";

function App() {
  const { isDark } = useSelector((state) => state.general);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "night" : "light",
    );
  }, [isDark]);

  useEffect(() => {
    document.documentElement.style.fontFamily =
      curLang === "en" ? "Inter, sans-serif" : "Tajawal, sans-serif";
  }, [curLang]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route element={<AppLayout />}>
          {/* HomePage */}
          <Route path="" element={<HomePage />} />

          {/* Courses Page */}
          <Route path="courses" element={<CoursesPage />} />
          {/* Error Pages */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Register */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
