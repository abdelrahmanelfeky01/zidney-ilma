import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function AppInitializer() {
  const { isDark } = useSelector((state) => state.general);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 200 });
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

  return null;
}

export default AppInitializer;
