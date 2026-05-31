import { useSelector } from "react-redux";

function HamburgerButton({ isOpen, setIsOpen }) {
  const isDark = useSelector((state) => state.general.isDark);

  const className = `flex h-9.5 w-9.5 cursor-pointer flex-col items-center justify-center gap-1.25 rounded-[10px] border transition-all duration-200 lg:hidden ${
    isDark
      ? "border-[#223028] bg-[#172019] text-[#a0b8a5] hover:border-primary-yellow-light hover:text-primary-yellow"
      : "border-[#e8e0d0] bg-white text-[#4a4a4a] hover:border-primary-yellow-light hover:text-primary-yellow"
  }`;

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={className}
      aria-label="Toggle menu"
    >
      <span
        className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
          isOpen ? "translate-y-[6.5px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
          isOpen ? "scale-x-0 opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
          isOpen ? "translate-y-[-6.5px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}

export default HamburgerButton;
