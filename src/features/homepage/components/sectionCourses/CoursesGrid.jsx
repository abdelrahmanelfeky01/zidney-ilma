import { useTranslation } from "react-i18next";
import { coursesGrid } from "../../../../data/coursesGrid";
import { useSelector } from "react-redux";

function CoursesGrid() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  const className = {
    classNameGridContainer: `cursor-pointer overflow-hidden rounded-[20px] border transition-all duration-300 hover:-translate-y-1.25 hover:border-primary-green-heavy flex flex-col ${
      isDark ? "border-[#223028] bg-[#172019]" : "border-[#e8e0d0] bg-white"
    }`,

    classNameContainerImage:
      "relative flex h-32.5 items-center justify-center overflow-hidden",

    classNameImage:
      "absolute top-3 right-3 rounded-[20px] bg-[#059669] px-2.25 py-0.75 text-[10px] font-bold text-white",

    classNameContainerCard: `mb-2 text-[11px] font-bold tracking-wide uppercase ${isDark ? "text-[#FFE082]" : "text-[#F9A825]"}`,

    classNameCardTitle: `mb-1.5 text-[15px] leading-[1.45] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,

    classNameCardDescription: `mb-3.5 text-[13px] leading-[1.6] ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,

    classNameCardBottom: `flex items-center justify-between border-t pt-3.5 text-xs ${isDark ? "border-[#223028]" : "border-[#e8e0d0]"} ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,

    classNameCardType: "text-[15px] font-bold text-primary-green",
  };

  return (
    <div className="mb-15 grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
      {coursesGrid.map((c, i) => (
        <div key={i} className={className.classNameGridContainer}>
          {/* Image */}
          <div
            className={className.classNameContainerImage}
            style={{ background: isDark ? c.bgDark : c.bgLight }}
          >
            <span className="text-5xl">{c.emoji}</span>
            <span className={className.classNameImage}>
              {t("homePage.freeCourses.type")}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className={className.classNameContainerCard}>
              {curLang === "en" ? c.catEn : c.catAr}
            </div>
            <div className={className.classNameCardTitle}>
              {curLang === "en" ? c.titleEn : c.titleAr}
            </div>

            <div className={`flex-1 ${className.classNameCardDescription}`}>
              {curLang === "en" ? c.descEn : c.descAr}
            </div>
            <div className={className.classNameCardBottom}>
              <span>{curLang === "en" ? c.metaEn : c.metaAr}</span>
              <span className={className.classNameCardType}>
                {t("homePage.freeCourses.type")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesGrid;
