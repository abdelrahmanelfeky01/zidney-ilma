import { useDispatch, useSelector } from "react-redux";
import { MoonIcon, SunIcon } from "../../../../ui/Icons";
import { toggleDarkMode } from "../../../../store/generalSlice";

function ButtonToggleTheme({ className = "", position = "nav" }) {
  const isDark = useSelector((state) => state.general.isDark);
  const dispatch = useDispatch();

  const classNameNav = `hidden h-9.5 min-w-9.5 cursor-pointer items-center justify-center rounded-[10px] border font-['Cairo'] text-sm font-semibold transition-all duration-200 lg:flex ${
    isDark
      ? "border-[#223028] bg-[#172019] text-[#a0b8a5] hover:border-primary-yellow-light hover:text-primary-yellow"
      : "border-[#e8e0d0] bg-white text-[#4a4a4a] hover:border-primary-yellow-light hover:text-primary-yellow"
  }`;

  const classNameHamburger = `flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-[10px] border transition-all duration-200 ${
    isDark
      ? "hover:border-primary-yellow-light hover:text-primary-yellow border-[#223028] bg-[#172019] text-[#a0b8a5]"
      : "hover:border-primary-yellow-light hover:text-primary-yellow border-[#e8e0d0] bg-white text-[#4a4a4a]"
  }`;

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className={`${position === "nav" ? classNameNav : classNameHamburger} ${className}`}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ButtonToggleTheme;
