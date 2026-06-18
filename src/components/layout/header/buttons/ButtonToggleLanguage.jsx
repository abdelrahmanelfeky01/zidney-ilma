import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function ButtonToggleLanguage({ className = "", position = "nav" }) {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();

  function handleToggleLanguage() {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;

    // Save language in local storage
    localStorage.setItem("language", newLang);
  }

  const classNameNav = `hidden h-9.5 min-w-9.5 cursor-pointer items-center justify-center rounded-[10px] border font-['Cairo'] text-sm font-semibold transition-all duration-200 lg:flex ${
    isDark
      ? "border-[#223028] bg-[#172019] text-[#a0b8a5] hover:border-primary-yellow-light hover:text-primary-yellow"
      : "border-[#e8e0d0] bg-white text-[#4a4a4a] hover:border-primary-yellow-light hover:text-primary-yellow"
  }`;

  const classNameHamburger = `h-9.5 min-w-9.5 cursor-pointer rounded-[10px] border font-['Cairo'] text-sm font-semibold transition-all duration-200 ${
    isDark
      ? "hover:border-primary-yellow-light hover:text-primary-yellow border-[#223028] bg-[#172019] text-[#a0b8a5]"
      : "hover:border-primary-yellow-light hover:text-primary-yellow border-[#e8e0d0] bg-white text-[#4a4a4a]"
  }`;

  return (
    <button
      onClick={handleToggleLanguage}
      className={`${position === "nav" ? classNameNav : classNameHamburger} ${className}`}
    >
      {t("homePage.header.buttonToggleLanguage")}
    </button>
  );
}

export default ButtonToggleLanguage;
