import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector } from "react-redux";

function Hamburger({ handleToggleLanguage }) {
  
  const isDark = useSelector((state) => state.general.isDark);
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <HamburgerButton isOpen={isOpen} isDark={isDark} setIsOpen={setIsOpen} />
      <HamburgerMenu
        isOpen={isOpen}
        isDark={isDark}
        setIsOpen={setIsOpen}
        handleToggleLanguage={handleToggleLanguage}
      />
    </>
  );
}

export default Hamburger;
