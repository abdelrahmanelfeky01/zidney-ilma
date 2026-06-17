import { Logo } from "../../../ui/Icons";
import NavLinks from "./NavLinks";
import HeaderActions from "./HeaderActions";
import { useSelector } from "react-redux";
import User from "./UserAvatar";
import Spinner from "../../../ui/Spinner";
import MiniSpinner from "../../../ui/MiniSpinner";

function Header() {
  const isDark = useSelector((state) => state.general.isDark);

  return (
    <nav
      className={`sticky top-0 right-0 left-0 z-1000 flex h-20 items-center justify-between px-4 backdrop-blur-2xl transition-colors duration-300 sm:px-6 lg:px-10 ${
        isDark
          ? "border-b border-[#223028] bg-[rgba(13,20,16,0.96)]"
          : "border-b border-[#EDE8E0] bg-[rgba(253,252,248,0.96)] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
      }`}
    >
      <Logo />
      <NavLinks />

      <HeaderActions />
    </nav>
  );
}

export default Header;
