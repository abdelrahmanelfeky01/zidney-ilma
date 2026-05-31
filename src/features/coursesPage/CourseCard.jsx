import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const gradient =
  "linear-gradient(135deg, #0D4A2F 0%, #1E6B4A 50%, #2D8B63 100%)";

function CourseCard({ course }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const isDark = useSelector((state) => state.general.isDark);
  
  const {
    icon,
    isFree,
    price,
    progress,
    lecturesCount,
    hours,
    teacherImage,
    rating,
    ctaVariant,
    categoryAr,
    categoryEn,
    titleAr,
    titleEn,
    descriptionAr,
    descriptionEn,
    levelAr,
    levelEn,
    teacherNameAr,
    teacherNameEn,
    teacherRoleAr,
    teacherRoleEn,
    ctaLabelAr,
    ctaLabelEn,
  } = course;

  const className = {
    article: `flex cursor-pointer flex-col overflow-hidden rounded-[20px] border shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-250 hover:-translate-y-1.5 hover:border-[rgba(76,175,80,0.2)] hover:shadow-[0_16px_48px_rgba(30,107,74,0.15),0_4px_16px_rgba(0,0,0,0.08)] ${isDark ? "border-[#223028] bg-[#172019]" : "border-[#ede8e0] bg-white"}`,
    styleBackgroundImage: {
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10S0 14.5 0 20s4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E\")",
      badge: `absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide ${
        isFree
          ? "text-primary-green-heavy bg-white/95"
          : "bg-[rgba(249,168,37,0.95)] text-white"
      }`,
    },
  };

  return (
    <article className={className.article}>
      {/* Thumbnail */}
      <div className="relative h-50 overflow-hidden">
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ background: gradient }}
        >
          <div
            className="absolute inset-0"
            style={className.styleBackgroundImage}
          />
          <span className="relative z-1 text-[56px] opacity-90">{icon}</span>
        </div>

        {/* Badge */}
        <span className={className.badge}>{isFree ? "مجاني" : price}</span>

        {/* Progress */}
        <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/50 to-transparent p-3">
          <div className="h-1 overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #52B788, #A8D5BC)",
              }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[11px] font-semibold text-white/90">
            <span>
              {progress > 0
                ? t("coursesPage.courseCard.yourProgress")
                : t("coursesPage.courseCard.notStartYet")}
            </span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-primary-green text-[11px] font-bold tracking-widest uppercase">
          {lang === "en" ? categoryEn : categoryAr}
        </span>

        <h3 className={`text-[17px] leading-snug font-extrabold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}>
          {lang === "en" ? titleEn : titleAr}
        </h3>

        <p className={`line-clamp-2 text-[13px] leading-relaxed ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}>
          {lang === "en" ? descriptionEn : descriptionAr}
        </p>

        {/* Meta */}
        <div className={`flex items-center gap-4 border-t pt-3 ${isDark ? "border-[#223028]" : "border-[#ede8e0]"}`}>
          <div className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}>
            <span className="text-sm">🎬</span>
            <span>
              {lecturesCount} {t("coursesPage.courseCard.lecture")}
            </span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}>
            <span className="text-sm">⏱️</span>
            <span>
              {hours} {t("coursesPage.courseCard.hour")}
            </span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}>
            <span className="text-sm">📊</span>
            <span>{lang === "en" ? levelEn : levelAr}</span>
          </div>
        </div>

        {/* Teacher */}
        <div className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm ${isDark ? "border-[#223028] bg-[#111a14]" : "border-[#e2d9cc] bg-[#f0ede6]"}`}>
            {teacherImage}
          </div>
          <div className="min-w-0 flex-1">
            <div className={`truncate text-[13px] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}>
              {lang === "en" ? teacherNameEn : teacherNameAr}
            </div>
            <div className={`text-[11px] ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}>
              {lang === "en" ? teacherRoleEn : teacherRoleAr}
            </div>
          </div>
          <div className="text-primary-yellow text-xs font-bold">
            ⭐ {rating}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button
          className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] border-0 py-3.5 text-sm font-bold text-white transition-all duration-250 hover:-translate-y-px ${
            ctaVariant === "gold"
              ? "shadow-[0_2px_10px_rgba(249,168,37,0.25)] hover:shadow-[0_4px_18px_rgba(249,168,37,0.4)]"
              : "shadow-[0_2px_10px_rgba(76,175,80,0.25)] hover:shadow-[0_4px_18px_rgba(76,175,80,0.4)]"
          }`}
          style={{
            background:
              ctaVariant === "gold"
                ? "linear-gradient(135deg, #f9a825, #ffe082)"
                : "linear-gradient(135deg, #388e3c, #4caf50)",
          }}
        >
          <span>{ctaVariant === "gold" ? "🛒" : "▶"}</span>
          <span>{lang === "en" ? ctaLabelEn : ctaLabelAr}</span>
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
