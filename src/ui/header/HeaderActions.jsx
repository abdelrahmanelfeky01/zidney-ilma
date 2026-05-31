import ButtonToggleLanguage from "./ButtonToggleLanguage";
import ButtonToggleTheme from "./ButtonToggleTheme";
import ButtonSignUp from "./ButtonSignUp";
import ButtonLogin from "./ButtonLogin";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";
import { useTranslation } from "react-i18next";

function HeaderActions() {
  const { i18n } = useTranslation();

  function handleToggleLanguage() {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  }
  
  return (
    <div className="flex items-center gap-2">
      <ButtonToggleLanguage handleToggleLanguage={handleToggleLanguage} />
      <ButtonToggleTheme />
      <ButtonLogin />
      <ButtonSignUp />
      <Hamburger handleToggleLanguage={handleToggleLanguage} />
    </div>
  );
}

export default HeaderActions;
