import { useTranslation } from "react-i18next";
import { heroVisualLessons } from "../../../../../data/heroVisualLessons";
import { useSelector } from "react-redux";

function Lessons() {
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameContainer: `divide-y ${isDark ? "divide-[#223028]" : "divide-[#e8e0d0]"}`,
    classNameLessonNumber: `flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${isDark ? "bg-[rgba(76,175,80,0.2)] text-primary-green" : "bg-[#E8F5E9] text-primary-green-heavy"}`,
    classNameLesson: `text-[13px] font-medium ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,
    classNameLessonDuration: `text-[11px] ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,
  };

  return (
    <div className={className.classNameContainer}>
      {heroVisualLessons.map((l, i) => (
        <div key={i} className={`flex items-center justify-between py-2.5`}>
          <div className="flex items-center gap-2.5">
            <div className={className.classNameLessonNumber}>{l.num}</div>
            <div>
              <div className={className.classNameLesson}>{l.nameEn}</div>
              <div className={className.classNameLessonDuration}>
                {curLang === "en" ? l.durEn : l.durAr}
              </div>
            </div>
          </div>
          <span
            className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
              l.badge === "free"
                ? "text-primary-green-heavy bg-[rgba(76,175,80,0.15)]"
                : "bg-[rgba(239,68,68,0.1)] text-[#dc2626]"
            }`}
          >
            {curLang === "en" ? l.badgeEn : l.badgeAr}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
