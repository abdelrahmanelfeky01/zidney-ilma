import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function AppInitializer() {
  const { isDark } = useSelector((state) => state.general);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  // For init AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 200,
      disable: () => window.innerWidth < 770,
    });
  }, []);

  // For AOS on refresh
  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  // set attribute fot css
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "night" : "light",
    );
  }, [isDark]);

  // use fonts dependence on language
  useEffect(() => {
    document.documentElement.style.fontFamily =
      curLang === "en" ? "Inter, sans-serif" : "Tajawal, sans-serif";
  }, [curLang]);

  // init language
  useEffect(() => {
    function handleToggleLanguage() {
      // 1. Search on local storage if there is language saved
      const savedLanguage = localStorage.getItem("language");
      // 2. if there is language? use it .. if no language .. use arabic
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = savedLanguage;
      }
    }

    handleToggleLanguage();
  }, [i18n]);

  return null;
}

export default AppInitializer;
