import { createPortal } from "react-dom";
import { MoonIcon, SunIcon } from "../../ui/Icons";
import { useTranslation } from "react-i18next";
import { navLinks } from "../../data/navLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/generalSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function HamburgerMenu({ isOpen, setIsOpen, handleToggleLanguage }) {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const className = {
    classNameOverlay: `fixed top-18 right-0 bottom-0 left-0 z-1001 transition-opacity duration-300 ${
      isOpen
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    } ${isDark ? "bg-[rgba(0,0,0,0.6)]" : "bg-[rgba(0,0,0,0.3)]"}`,

    classNameDrawer: `fixed top-18 right-0 left-0 z-1002 transition-all duration-300 ease-in-out  ${
      isOpen
        ? "translate-y-0 opacity-100"
        : "pointer-events-none -translate-y-4 opacity-0"
    } ${
      isDark
        ? "border-b border-[#223028] bg-[rgba(13,20,16,0.98)]"
        : "border-b border-[#e8e0d0] bg-[rgba(253,252,248,0.98)]"
    } backdrop-blur-2xl`,

    classNameLink: `flex w-full items-center rounded-[10px] px-4 py-3 text-sm font-medium no-underline transition-all duration-200 ${
      isDark
        ? "text-[#a0b8a5] hover:bg-[#1a2e20] hover:text-[#FFE082]"
        : "text-[#4a4a4a] hover:bg-[#E8F5E9] hover:text-primary-green"
    }`,

    classNameButtonToggleLanguage: `h-9.5 min-w-9.5 cursor-pointer rounded-[10px] border font-['Cairo'] text-sm font-semibold transition-all duration-200 ${
      isDark
        ? "border-[#223028] bg-[#172019] text-[#a0b8a5] hover:border-primary-yellow-light hover:text-primary-yellow"
        : "border-[#e8e0d0] bg-white text-[#4a4a4a] hover:border-primary-yellow-light hover:text-primary-yellow"
    }`,

    classNameButtonToggleTheme: `flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-[10px] border transition-all duration-200 ${
      isDark
        ? "border-[#223028] bg-[#172019] text-[#a0b8a5] hover:border-primary-yellow-light hover:text-primary-yellow"
        : "border-[#e8e0d0] bg-white text-[#4a4a4a] hover:border-primary-yellow-light hover:text-primary-yellow"
    }`,

    classNameButtonSignUp:
      "cursor-pointer rounded-[10px] border-none bg-primary-green px-5.5 py-2.25 font-['Cairo'] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#388E3C]",

    classNameButtonLogin:
      " cursor-pointer rounded-[10px] ring-2 ring-inset ring-primary-green bg-transparent px-5.5 py-2.25 font-['Cairo'] text-sm font-semibold text-primary-green transition-all duration-200 hover:bg-primary-green hover:text-white md:block lg:px-5.5 lg:py-2.25",
  };

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={className.classNameOverlay}
      />

      {/* Menu */}
      <div className={className.classNameDrawer}>
        <div className="px-5 py-4">
          {/* Nav Links */}
          <ul
            className={`mb-4 list-none border-b pb-4 ${
              isDark ? "border-[#223028]" : "border-[#e8e0d0]"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.link}>
                <Link
                  to={link.link}
                  onClick={() => setIsOpen(false)}
                  className={className.classNameLink}
                >
                  {curLang === "en" ? link.labelEn : link.labelAr}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleLanguage}
                className={className.classNameButtonToggleLanguage}
              >
                {t("header.buttonToggleLanguage")}
              </button>

              <button
                onClick={() => dispatch(toggleDarkMode())}
                className={className.classNameButtonToggleTheme}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
                className={className.classNameButtonLogin}
              >
                {t("header.buttonLogin")}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
                className={className.classNameButtonSignUp}
              >
                {t("header.buttonSignUp")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default HamburgerMenu;
