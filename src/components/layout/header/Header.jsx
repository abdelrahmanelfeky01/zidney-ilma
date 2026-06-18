import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import MiniSpinner from "../../../ui/MiniSpinner";
import Hamburger from "./Hamburger";
import NavBrand from "./NavBrand";
import NavActions from "./NavActions";
import UserAvatar from "./UserAvatar";
import { useUser } from "../../../features/auth/hooks/useUser";

function Header() {
  const isDark = useSelector((state) => state.general.isDark);
  const { isAuthenticated } = useUser();

  const className = `sticky top-0 right-0 left-0 z-1000 flex h-20 items-center justify-between px-4 backdrop-blur-2xl transition-colors duration-300 sm:px-6 lg:px-10 ${
    isDark
      ? "border-b border-[#223028] bg-[rgba(13,20,16,0.96)]"
      : "border-b border-[#EDE8E0] bg-[rgba(253,252,248,0.96)] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
  }`;

  return (
    <nav className={className}>
      <NavBrand />

      <div className="fixed right-1/2 translate-x-1/2">
        <ul className="hidden list-none items-center gap-1 lg:flex">
          <NavLinks position="nav" />
        </ul>
      </div>

      <div className="flex items-center justify-between gap-5">
        {/* For large screens */}
        <NavActions />
        {/* For small screens */}
        <Hamburger />
        {/* UserAvatar (show in large and small screens) */}
        {isAuthenticated && <UserAvatar />}
      </div>
    </nav>
  );
}

export default Header;
