import { useTranslation } from "react-i18next";
import { footerCols } from "../../../data/footerCols";
import { useSelector } from "react-redux";

function FooterCols() {
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const cols = i18n.language === "en" ? footerCols.en : footerCols.ar;

  const className = {
    title: `mb-4.5 text-[11px] font-bold tracking-[0.14em] uppercase ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,

    link: `text-[13.5px] no-underline transition-colors duration-200 ${isDark ? "text-[#5a7560]" : "text-[#888]"} ${isDark ? "hover:text-[#FFE082]" : "hover:text-primary-green"}`,
  };
  return (
    <>
      {cols.map((col, i) => (
        <div key={i}>
          <div className={className.title}>{col.title}</div>
          <ul className="list-none">
            {col.links.map((link, j) => (
              <li key={j} className="mb-2.5">
                <a href="#" className={className.link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default FooterCols;
