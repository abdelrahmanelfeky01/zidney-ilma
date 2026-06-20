import { useState } from "react";
import abdelrahmanElfeky from "../../../assets/images/people/abdelrahman_elfeky.jpg";

import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLogout } from "../../../features/auth/hooks/useLogout";
import MiniSpinner from "../../../ui/MiniSpinner";
function UserAvatar() {
  const email = "hi@abdelrahmanelfeky.com";
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useSelector((state) => state.general);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;
  const { logout, isLoading: isLoginOut } = useLogout();

  function handleClickAvatar(e) {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="h-10 w-10 rounded-full">
      {/* Button */}
      <button
        className="relative z-1100 cursor-pointer rounded-full"
        onClick={handleClickAvatar}
      >
        <img src={abdelrahmanElfeky} alt="User" className="rounded-full" />
      </button>

      {/* Menu */}

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="fixed top-0 left-0 z-999 h-dvh w-full"
          />

          {/* Menu */}
          <div
            className={`${isDark ? "shadow-[0_4px_12px_rgba(255,255,255,0.03)]" : "shadow-lg"} ${isDark ? "bg-night" : "bg-light"} ${curLang === "en" ? "-translate-x-50 translate-y-4" : "translate-x-50 translate-y-4"} animate-menu-in relative z-1000 w-60 rounded-lg`}
          >
            {/* Top */}
            <div
              dir="ltr"
              className="flex cursor-pointer items-center justify-center gap-3 p-4 pt-6 pb-3"
            >
              <img
                src={abdelrahmanElfeky}
                alt="User"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="text-title font-semibold">Abdelrahman Elfeky</h3>
                <p className="text-description text-sm">
                  {email.slice(0, 15)}
                  {email.length > 15 && "...."}
                </p>
              </div>
            </div>

            {/* Devider */}

            <div className="border-description/20 h-1 border-b p-0 px-4 pb-5" />

            {/* Buttons */}
            <ul className="text-title divide-title/5 divide-y py-5">
              <li
                className={` ${
                  isDark
                    ? "text-[#a0b8a5] hover:bg-[#1a2e20] hover:text-[#FFE082]"
                    : "hover:text-primary-green text-[#4a4a4a] hover:bg-[#E8F5E9]"
                } hover:bg-primary-green/10 cursor-pointer px-4 py-3 transition-all duration-300`}
              >
                <button className="flex cursor-pointer items-center justify-center gap-2">
                  <IoSettingsOutline />
                  {t("userMenu.profileSettings")}
                </button>
              </li>
              <li
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className={`${isDark ? "bg-night" : "bg-light"} ${
                  isDark
                    ? "text-[#a0b8a5] hover:bg-[#1a2e20] hover:text-[#FFE082]"
                    : "hover:text-primary-green text-[#4a4a4a] hover:bg-[#E8F5E9]"
                } hover:bg-primary-green/10 cursor-pointer px-4 py-3 transition-all duration-300`}
              >
                <button className="flex cursor-pointer items-center justify-center gap-2">
                  <TbLogout className="translate-x-[0.100rem]" />
                  {t("userMenu.logout")}
                  {isLoginOut && <MiniSpinner />}
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default UserAvatar;
