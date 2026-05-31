import { useTranslation } from "react-i18next";
import { navLinks } from "../../data/navLinks";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavLinks() {
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  const className = `max-857:text-[12px] max-815:text-[10px] rounded-[10px] px-3.5 py-1.75 text-[14px] no-underline transition-all duration-200 lg:px-3.75 lg:text-md xl:text-lg ${
    isDark
      ? "text-[#a0b8a5] hover:bg-[#1a2e20] hover:text-[#FFE082]"
      : "text-[#4a4a4a] hover:bg-[#E8F5E9] hover:text-primary-green"
  }`;

  return (
    <ul className="hidden list-none items-center gap-1 lg:flex">
      {navLinks.map((link) => (
        <li key={link.link}>
          <Link to={link.link} className={className}>
            {curLang === "en" ? link.labelEn : link.labelAr}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
