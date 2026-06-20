import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useUser } from "../../../features/auth/hooks/useUser";
import { createPortal } from "react-dom";
import ButtonToggleLanguage from "./buttons/ButtonToggleLanguage";
import ButtonToggleTheme from "./buttons/ButtonToggleTheme";
import ButtonLogin from "./buttons/ButtonLogin";
import ButtonSignUp from "./buttons/ButtonSignUp";
import NavLinks from "./NavLinks";

function HamburgerMenu({ isOpen, setIsOpen, handleToggleLanguage }) {
  const isDark = useSelector((state) => state.general.isDark);
  const { isAuthenticated, isLoading } = useUser();

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-18 right-0 bottom-0 left-0 z-1001 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } ${isDark ? "bg-[rgba(0,0,0,0.6)]" : "bg-[rgba(0,0,0,0.3)]"}`}
      />

      {/* Menu */}
      <div
        className={`fixed top-18 right-0 left-0 z-1002 transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        } ${
          isDark
            ? "border-b border-[#223028] bg-[rgba(13,20,16,0.98)]"
            : "border-b border-[#e8e0d0] bg-[rgba(253,252,248,0.98)]"
        } backdrop-blur-2xl`}
      >
        <div className="px-5 py-4">
          {/* Nav Links */}
          <ul
            className={`divide-title/4 mb-4 flex list-none flex-col gap-3 divide-y border-b pb-4 ${
              isDark ? "border-[#223028]" : "border-[#e8e0d0] "
            }`}
          >
            <NavLinks
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              position="hamburger"
            />
          </ul>

          {/* Bottom Actions */}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ButtonToggleLanguage
                handleToggleLanguage={handleToggleLanguage}
                position="hamburger"
              />
              <ButtonToggleTheme position="hamburger" />
            </div>

            {!isAuthenticated && !isLoading && (
              <div className="flex items-center justify-between gap-3">
                <ButtonLogin position="hamburger" />
                <ButtonSignUp position="hamburger" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

function Hamburger() {
  const isDark = useSelector((state) => state.general.isDark);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-9.5 w-9.5 cursor-pointer flex-col items-center justify-center gap-1.25 rounded-[10px] border transition-all duration-200 lg:hidden ${
          isDark
            ? "hover:border-primary-yellow-light hover:text-primary-yellow border-[#223028] bg-[#172019] text-[#a0b8a5]"
            : "hover:border-primary-yellow-light hover:text-primary-yellow border-[#e8e0d0] bg-white text-[#4a4a4a]"
        }`}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
            isOpen && "translate-y-[6.5px] rotate-45"
          }`}
        />
        <span
          className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
            isOpen && "scale-x-0 opacity-0"
          }`}
        />
        <span
          className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
            isOpen && "translate-y-[-6.5px] -rotate-45"
          }`}
        />
      </button>

      {/* Hamburger Button */}
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Hamburger;
