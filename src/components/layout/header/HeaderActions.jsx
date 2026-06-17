import ButtonToggleLanguage from "./ButtonToggleLanguage";
import ButtonToggleTheme from "./ButtonToggleTheme";
import ButtonSignUp from "./ButtonSignUp";
import ButtonLogin from "./ButtonLogin";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../features/auth/hooks/useUser";
import MiniSpinner from "../../../ui/MiniSpinner";
import UserAvatar from "./UserAvatar";

function HeaderActions() {
  const { i18n } = useTranslation();

  const { isAuthenticated, isLoading: isLoginIn } = useUser();

  function handleToggleLanguage() {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  }

  return (
    <div className="flex items-center gap-5">
      <Hamburger handleToggleLanguage={handleToggleLanguage} />

      {/* if is Loading show this spinner */}
      {isLoginIn && <MiniSpinner />}

      {/* there is Current User Log in ?? >> show user component */}
      {isAuthenticated && <UserAvatar />}

      {/* no User Log in ?? show this buttons */}
      {!isAuthenticated && !isLoginIn && (
        <>
          <ButtonToggleLanguage handleToggleLanguage={handleToggleLanguage} />
          <ButtonToggleTheme />
          <ButtonLogin />
          <ButtonSignUp />
        </>
      )}
    </div>
  );
}

export default HeaderActions;
