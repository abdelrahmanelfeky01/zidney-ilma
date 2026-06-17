import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const coursesCategories = [
  { labelAr: "مجاني", labelEn: "Free", count: 16 },
  { labelAr: "مدفوع", labelEn: "Paid", count: 32 },
  { labelAr: "القرآن الكريم", labelEn: "The Holy Quran", count: 20 },
  { labelAr: "التجويد", labelEn: "Tajweed", count: 14 },
];

function CoursesFilters() {
  const { t, i18n } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);
  const lang = i18n.language;

  const className = {
    container: "mx-auto max-w-7xl px-6 pt-6 380:px-8 380:pt-8 ",

    subContainer: "no-scrollbar flex flex-wrap items-center gap-2.5 pb-2",

    button: ` hover:border-primary-green hover:text-primary-green inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 380:px-5.5 380:py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-250 hover:bg-[rgba(76,175,80,0.04)] ${isDark ? "border-[#223028] bg-[#172019] text-[#a0b8a5]" : "border-[#e2d9cc] bg-white text-[#4a5568]"}`,

    activeButton:
      "border-primary-green bg-primary-green inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 380:px-5.5 380:py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_2px_10px_rgba(76,175,80,0.3)] transition-all duration-250",

    numberCourses: `rounded-full px-2 py-px text-xs font-bold ${isDark ? "bg-[#223028] text-[#5a7560]" : "bg-[#f0ede6] text-[#8a93a6]"}`,

    numberCoursesWhenButtonActive:
      "rounded-full bg-white/25 px-2 py-px text-xs font-bold text-white",
  };

  return (
    <>
      {/* Filter Buttons */}
      <div data-aos="fade-up" className={className.container}>
        <div className={className.subContainer}>
          {/* Active filter */}
          <button className={className.activeButton}>
            {t("coursesPage.all")}
            <span className={className.numberCoursesWhenButtonActive}>
              {t("coursesPage.allCount")}
            </span>
          </button>

          {coursesCategories.map((c) => (
            <button key={c.labelEn} className={className.button}>
              {lang === "en" ? c.labelEn : c.labelAr}
              <span className={className.numberCourses}>{c.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-8 pt-5">
        <p className="text-sm text-[#8a93a6]">
          عرض <strong className="font-bold text-[#1a1f2e]">48</strong> نتيجة
        </p>

        <div className="flex items-center gap-2 text-sm text-[#4a5568]">
          <span>ترتيب حسب:</span>
          <select className="cursor-pointer rounded-lg border border-[#e2d9cc] bg-white px-3 py-1.5 text-sm font-semibold text-[#1a1f2e] outline-none">
            <option>الأحدث</option>
            <option>الأكثر تسجيلاً</option>
            <option>التقييم الأعلى</option>
            <option>المجاني أولاً</option>
          </select>
        </div>
      </div> */}
    </>
  );
}

export default CoursesFilters;
