import { useTranslation } from "react-i18next";
import BackButton from "./BackButton";
import { useSelector } from "react-redux";

function CoursesHero() {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);
  const className = {
    classNameSection:
      "relative overflow-hidden px-8 py-16 text-center",

    styleSection: {
      background: isDark
        ? "linear-gradient(160deg, #1B5E20 0%, #2E7D32 60%, #388e3c 100%)"
        : "linear-gradient(160deg, #388e3c 0%, #4caf50 60%, #66bb6a 100%)",
    },

    styleBackground: {
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    },
    classNameBackground: "pointer-events-none absolute inset-0",

    badge:
      "mb-5 md:inline-flex hidden items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-[13px] font-semibold text-white/90 backdrop-blur-sm",
    title:
      "mb-4 text-[clamp(28px,4vw,44px)] leading-tight font-black tracking-tight text-white",
    description: "text-base leading-relaxed text-white/80",
  };

  return (
    <section
      className={className.classNameSection}
      style={className.styleSection}
    >
      <div
        className={className.classNameBackground}
        style={className.styleBackground}
      />

      <BackButton />

      {/* Content */}
      <div className="relative z-1 mx-auto max-w-175">
        {/* Badge */}
        <div className={className.badge}>
          <span>{t("coursesPage.badge")}</span>
          <span>📚</span>
        </div>

        <h1 className={className.title}>{t("coursesPage.title")}</h1>

        <p className={className.description}>{t("coursesPage.description")}</p>

        {/* Stats */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-10">
          <div className="text-center">
            <span className="block text-[26px] leading-none font-black text-white">
              {t("coursesPage.availableCoursesNumber")}
            </span>
            <span className="mt-1 block text-xs text-white/70">
              {t("coursesPage.availableCourses")}
            </span>
          </div>

          <div className="hidden h-9 w-px bg-white/20 sm:block" />

          <div className="text-center">
            <span className="block text-[26px] leading-none font-black text-white">
              {t("coursesPage.coursesLecturesCount")}
            </span>
            <span className="mt-1 block text-xs text-white/70">
              {t("coursesPage.coursesLectures")}
            </span>
          </div>

          <div className="hidden h-9 w-px bg-white/20 sm:block" />

          <div className="text-center">
            <span className="block text-[26px] leading-none font-black text-white">
              {t("coursesPage.specializedTeacherCount")}
            </span>
            <span className="mt-1 block text-xs text-white/70">
              {t("coursesPage.specializedTeacher")}
            </span>
          </div>

          <div className="hidden h-9 w-px bg-white/20 sm:block" />

          <div className="text-center">
            <span className="block text-[26px] leading-none font-black text-white">
              {t("coursesPage.registeredStudentCount")}
            </span>
            <span className="mt-1 block text-xs text-white/70">
              {t("coursesPage.registeredStudent")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesHero;
