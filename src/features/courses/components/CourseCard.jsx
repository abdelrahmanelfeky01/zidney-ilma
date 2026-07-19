import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const gradient =
  "linear-gradient(135deg, #0D4A2F 0%, #1E6B4A 50%, #2D8B63 100%)";

function CourseCard({ course }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();

  const isDark = useSelector((state) => state.general.isDark);

  // سيتم استبدالها بالقيمة الحقيقية لاحقا (من بيانات المستخدم)
  const progress = 0;

  const {
    category_ar,
    category_en,
    created_at,
    description_ar,
    description_en,
    slug,
    hours,
    id,
    is_free,
    lessons,
    level_ar,
    level_en,
    price,
    teacher_img_url,
    teacher_name_ar,
    teacher_name_en,
    teacher_role_ar,
    teacher_role_en,
    thumbnail_url,
    title_ar,
    title_en,
  } = course;

  return (
    <article
      onClick={() => navigate(`/course/${slug}`)}
      className={`flex cursor-pointer flex-col overflow-hidden rounded-[20px] border shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-250 hover:-translate-y-1.5 hover:border-[rgba(76,175,80,0.2)] hover:shadow-[0_16px_48px_rgba(30,107,74,0.15),0_4px_16px_rgba(0,0,0,0.08)] ${isDark ? "border-[#223028] bg-[#172019]" : "border-[#ede8e0] bg-white"}`}
    >
      {/* Thumbnail */}
      <div className="relative h-50 overflow-hidden">
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ background: gradient }}
        >
          <img src={thumbnail_url} alt={`${title_en + " image"}`} />
        </div>

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
          {lang === "en" ? category_en : category_ar}
        </span>

        <h3
          className={`text-[17px] leading-snug font-extrabold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}
        >
          {lang === "en" ? title_en : title_ar}
        </h3>

        <p
          className={`line-clamp-2 text-[13px] leading-relaxed ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
        >
          {lang === "en" ? description_en : description_ar}
        </p>

        {/* Meta */}
        <div
          className={`flex items-center gap-4 border-t pt-3 ${isDark ? "border-[#223028]" : "border-[#ede8e0]"}`}
        >
          <div
            className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
          >
            <span className="text-sm">🎬</span>
            <span>
              {lessons?.length} {t("coursesPage.courseCard.lecture")}
            </span>
          </div>
          <div
            className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
          >
            <span className="text-sm">⏱️</span>
            <span>
              {hours} {t("coursesPage.courseCard.hour")}
            </span>
          </div>
          <div
            className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
          >
            <span className="text-sm">📊</span>
            <span>{lang === "en" ? level_en : level_ar}</span>
          </div>
        </div>

        {/* Teacher */}
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm ${isDark ? "border-[#223028] bg-[#111a14]" : "border-[#e2d9cc] bg-[#f0ede6]"}`}
          >
            {teacher_img_url}
          </div>
          <div className="min-w-0 flex-1">
            <div
              className={`truncate text-[13px] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}
            >
              {lang === "en" ? teacher_name_en : teacher_name_ar}
            </div>
            <div
              className={`text-[11px] ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
            >
              {lang === "en" ? teacher_role_en : teacher_role_ar}
            </div>
          </div>
          {/* <div className="text-primary-yellow text-xs font-bold">
            ⭐ {rating}
          </div> */}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button
          className={`"shadow-[0_2px_10px_rgba(76,175,80,0.25)] hover:shadow-[0_4px_18px_rgba(76,175,80,0.4)]" } flex w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] border-0 py-3.5 text-sm font-bold text-white transition-all duration-250 hover:-translate-y-px`}
          style={{
            background: "linear-gradient(135deg, #388e3c, #4caf50)",
          }}
        >
          {/* لاحقا سأقرا من بيانات المستخدم اذا الكورس مملوك له يكون الزر اسمه اكمل التعلم واذا كان غير مملوك يكون احصل عليه الان .. واذا كان غير مملوك وغير مجاني يكون احصل عليه مقابل 100$ مثلا */}
          <span>{lang === "en" ? "Enroll now" : "احصل عليه الآن"}</span>
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
