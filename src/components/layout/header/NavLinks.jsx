import { useTranslation } from "react-i18next";
import { navLinks } from "../../../data/navLinks";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../features/auth/hooks/useUser";
import { toggleShowLoginModal } from "../../../store/generalSlice";
import { useEffect } from "react";

function NavLinks({ position = "nav", isOpen, setIsOpen }) {
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  const { isAuthenticated, isLoading } = useUser();
  const dispatch = useDispatch();

  const className = {
    // ClassName NAV
    nav: ({ isActive }) =>
      isActive
        ? `max-857:text-[12px] max-815:text-[10px] lg:text-md rounded-[10px] px-3.5 py-1.75 text-[14px] font-[520] no-underline transition-all duration-200 lg:px-3.75 xl:text-lg ${
            isDark
              ? "bg-[#1a2e20] text-[#FFE082]"
              : "text-primary-green bg-[#E8F5E9]"
          }`
        : `max-857:text-[12px] max-815:text-[10px] lg:text-md rounded-[10px] px-3.5 py-1.75 text-[14px] font-[520] no-underline transition-all duration-200 lg:px-3.75 xl:text-lg ${
            isDark
              ? "text-[#a0b8a5] hover:bg-[#1a2e20] hover:text-[#FFE082]"
              : "hover:text-primary-green text-[#4a4a4a] hover:bg-[#E8F5E9]"
          }`,
    // ClassName Hamburger
    hamburger: `flex w-full items-center rounded-[10px] px-4 py-3 text-md font-medium no-underline transition-all duration-200 ${
      isDark
        ? "text-[#a0b8a5] hover:bg-[#1a2e20] hover:text-[#FFE082]"
        : "hover:text-primary-green text-[#4a4a4a] hover:bg-[#E8F5E9]"
    }`,
  };

  useEffect(() => {
    console.log(isOpen);
    console.log(setIsOpen);
  });

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.link}>
          <NavLink
            to={link.link}
            end={link.link === "/"}
            className={position === "nav" ? className.nav : className.hamburger}
            onClick={(e) => {
              if (position === "hamburger") setIsOpen(false);

              if (link.requiresAuth && !isAuthenticated && !isLoading) {
                e.preventDefault();
                dispatch(toggleShowLoginModal());
              }
              return;
            }}
          >
            {curLang === "en" ? link.labelEn : link.labelAr}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
