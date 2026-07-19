import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function CoursesFilters({ courses, activeCategory, setActiveCategory }) {
  const { i18n } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);
  const curLang = i18n.language;

  const freeCoursesCount = courses?.filter((course) => course.is_free).length;
  const paidCoursesCount = courses?.filter((course) => !course.is_free).length;
  const quranCoursesCount = courses?.filter(
    (course) => course.category_en === "Quran",
  ).length;
  const languagesCoursesCount = courses?.filter(
    (course) => course.category_en === "Languages",
  ).length;

  // key: معرّف ثابت لا يتغير مع تغيّر اللغة، يُستخدم في الفلترة الفعلية داخل CoursesPage
  const coursesCategories = [
    { key: "all", labelAr: "الكل", labelEn: "All", count: courses?.length },
    { key: "free", labelAr: "مجاني", labelEn: "Free", count: freeCoursesCount },
    { key: "paid", labelAr: "مدفوع", labelEn: "Paid", count: paidCoursesCount },
    {
      key: "quran",
      labelAr: "القرآن الكريم",
      labelEn: "The Holy Quran",
      count: quranCoursesCount,
    },
    {
      key: "languages",
      labelAr: "اللغات",
      labelEn: "Languages",
      count: languagesCoursesCount,
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className={"380:px-8 380:pt-8 mx-auto max-w-7xl px-6 pt-6"}
    >
      <div className={"no-scrollbar flex flex-wrap items-center gap-2.5 pb-2"}>
        {coursesCategories.map((category) => {
          const isActive = activeCategory === category.key;

          return (
            <button
              key={category.key}
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory(category.key);
              }}
              className={`380:px-5.5 380:py-2.5 inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold whitespace-nowrap transition-all duration-250 ${
                isActive
                  ? "border-primary-green bg-primary-green text-white shadow-[0_2px_10px_rgba(76,175,80,0.3)]"
                  : `hover:border-primary-green hover:text-primary-green hover:bg-[rgba(76,175,80,0.04)] ${
                      isDark
                        ? "border-[#223028] bg-[#172019] text-[#a0b8a5]"
                        : "border-[#e2d9cc] bg-white text-[#4a5568]"
                    }`
              }`}
            >
              {curLang === "en" ? category.labelEn : category.labelAr}
              <span
                className={`rounded-full px-2 py-px text-xs font-bold ${
                  isActive
                    ? "bg-white/25 text-white"
                    : isDark
                      ? "bg-[#223028] text-[#5a7560]"
                      : "bg-[#f0ede6] text-[#8a93a6]"
                }`}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesFilters;
