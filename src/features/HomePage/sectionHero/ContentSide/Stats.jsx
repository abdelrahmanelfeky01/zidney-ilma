import { useTranslation } from "react-i18next";
import { stats } from "../../../../data/stats";
import { useSelector } from "react-redux";

function Stats() {
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameContainer: `grid grid-cols-2 divide-x divide-y overflow-hidden rounded-2xl border sm:flex sm:divide-y-0 ${
      isDark ? "border-[#223028] bg-[#172019]" : "border-[#e8e0d0] bg-white"
    } ${isDark ? "divide-[#223028]" : "divide-[#e8e0d0]"}`,
    classNameNumberStats: `mb-1 text-[26px] leading-none font-bold ${isDark ? "text-[#FFE082]" : "text-primary-green"}`,
    classNameLabelStats: `text-xs ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,
  };

  return (
    <div className={className.classNameContainer}>
      {stats.map((s, i) => (
        <div key={i} className="flex-1 px-4 py-4.5 text-center">
          <div className={className.classNameNumberStats}>{s.num}</div>
          <div className={className.classNameLabelStats}>
            {curLang === "en" ? s.labelEn : s.labelAr}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
