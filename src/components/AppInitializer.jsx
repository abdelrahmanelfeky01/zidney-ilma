import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function AppInitializer() {
  const { isDark } = useSelector((state) => state.general);
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  const location = useLocation();

  // For init AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 200,
      disable: () => window.innerWidth < 770,
    });
  }, []);

  // إعادة مسح كامل للـ DOM بعد كل تغيير راوت
  // (بدون هذا، أي عنصر عليه data-aos يُركَّب بعد أول تحميل يفضل مخفي للأبد)
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
      const savedLanguage = localStorage.getItem("language");
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
