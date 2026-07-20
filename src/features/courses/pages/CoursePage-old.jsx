import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUturnLeft,
  HiChevronDown,
  HiPlay,
  HiPause,
  HiCheckCircle,
  HiLockClosed,
  HiOutlineArrowsPointingOut,
  HiOutlineSpeakerWave,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePaperClip,
  HiOutlineDocumentArrowDown,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineLanguage,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

/* --------------------------------- */
/* ------ Mock Data (مؤقت لحين ربط Supabase) ------ */
/* --------------------------------- */
/* ملاحظة: هيكل الحقول (title_ar/title_en...) مطابق لتسمية أعمدة   */
/* جدول lessons في Supabase حتى يسهل استبدالها ببيانات حقيقية لاحقاً. */

const COURSE_TEACHER = { ar: "د. أحمد منصور", en: "Dr. Ahmed Mansour" };

const courseUnits = [
  {
    id: "unit-1",
    title_ar: "الوحدة الأولى: مقدمة",
    title_en: "Unit 1: Introduction",
    lectures: [
      {
        id: "lec-11",
        title_ar: "أهمية علم التجويد",
        title_en: "The Importance of Tajweed",
        type: "video",
        duration_ar: "10 دقائق",
        duration_en: "10 min",
        completed: true,
        locked: false,
      },
    ],
  },
  {
    id: "unit-2",
    title_ar: "الوحدة الثانية: المخارج",
    title_en: "Unit 2: Articulation Points",
    lectures: [
      {
        id: "lec-21",
        title_ar: "مقدمة المخارج العامة",
        title_en: "Introduction to Articulation Points",
        type: "video",
        duration_ar: "15 دقيقة",
        duration_en: "15 min",
        completed: true,
        locked: false,
      },
      {
        id: "lec-22",
        title_ar: "مخرج الجوف والحلق",
        title_en: "The Oral Cavity and Throat",
        type: "video",
        duration_ar: "20 دقيقة",
        duration_en: "20 min",
        completed: true,
        locked: false,
      },
      {
        id: "lec-23",
        title_ar: "مخارج حروف اللسان",
        title_en: "Tongue Letters Articulation",
        type: "video",
        duration_ar: "28 دقيقة",
        duration_en: "28 min",
        completed: false,
        locked: false,
        description_ar:
          "في هذه المحاضرة سنتناول بالتفصيل مخارج الحروف التي تخرج من اللسان، وهو أكثر مخارج الحروف وأكثرها تفرعًا، سنركز على المناطق العشرة والحروف الـ18 التي تنتسب إليه.",
        description_en:
          "In this lecture we cover in detail the articulation points coming from the tongue, the most branched of all points. We focus on the ten regions and the 18 letters that belong to it.",
        points_ar: [
          "أقصى اللسان: القاف والكاف",
          "وسط اللسان: الجيم والشين والياء",
          "حافة اللسان: الضاد واللام",
          "طرف اللسان: النون والراء",
        ],
        points_en: [
          "Back of the tongue: Qaf and Kaf",
          "Middle of the tongue: Jeem, Sheen and Ya",
          "Edge of the tongue: Dhad and Lam",
          "Tip of the tongue: Noon and Ra",
        ],
      },
      {
        id: "lec-24",
        title_ar: "مخرج الشفتين والخيشوم",
        title_en: "Lips and Nasal Cavity",
        type: "video",
        duration_ar: "18 دقيقة",
        duration_en: "18 min",
        completed: false,
        locked: false,
      },
    ],
  },
  {
    id: "unit-3",
    title_ar: "الوحدة الثالثة: الصفات",
    title_en: "Unit 3: Letter Attributes",
    lectures: [
      {
        id: "lec-31",
        title_ar: "الصفات المتضادة",
        title_en: "Opposing Attributes",
        type: "video",
        duration_ar: "22 دقيقة",
        duration_en: "22 min",
        completed: false,
        locked: true,
      },
    ],
  },
];

/* --------------------------------- */
/* ------ Helpers ------ */
/* --------------------------------- */

function flattenLectures(units) {
  return units.flatMap((unit) =>
    unit.lectures.map((lecture) => ({ ...lecture, unitId: unit.id })),
  );
}

function LectureStatusIcon({ lecture, isActive, isCompleted, isDark }) {
  if (isCompleted) {
    return (
      <HiCheckCircle className="text-primary-green h-[18px] w-[18px] shrink-0" />
    );
  }
  if (lecture.locked) {
    return (
      <HiLockClosed
        className={`h-[15px] w-[15px] shrink-0 ${isDark ? "text-[#5a7560]" : "text-[#a8b0a8]"}`}
      />
    );
  }
  if (isActive) {
    return (
      <span className="bg-primary-green flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full">
        <HiPlay className="h-2.5 w-2.5 text-white" />
      </span>
    );
  }
  return (
    <span
      className={`h-[15px] w-[15px] shrink-0 rounded-full border-2 ${
        isDark ? "border-[#3a4a3e]" : "border-[#cdd6cd]"
      }`}
    />
  );
}

function UnitStatusIcon({ unit, completedIds, activeLectureId, isDark }) {
  const allCompleted = unit.lectures.every((l) => completedIds.has(l.id));
  const allLocked = unit.lectures.every((l) => l.locked);
  const hasActive = unit.lectures.some((l) => l.id === activeLectureId);

  if (allCompleted) {
    return (
      <HiCheckCircle className="text-primary-green h-[18px] w-[18px] shrink-0" />
    );
  }
  if (allLocked) {
    return (
      <HiLockClosed
        className={`h-[15px] w-[15px] shrink-0 ${isDark ? "text-[#5a7560]" : "text-[#a8b0a8]"}`}
      />
    );
  }
  if (hasActive) {
    return (
      <span className="bg-primary-green flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full">
        <HiPlay className="h-2.5 w-2.5 text-white" />
      </span>
    );
  }
  return (
    <span
      className={`h-[15px] w-[15px] shrink-0 rounded-full border-2 ${
        isDark ? "border-[#3a4a3e]" : "border-[#cdd6cd]"
      }`}
    />
  );
}

/* --------------------------------- */
/* ------ Main Component ------ */
/* --------------------------------- */

function CoursePage() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const flatLectures = useMemo(() => flattenLectures(courseUnits), []);

  const initialActiveId = useMemo(() => {
    const currentLecture = flatLectures.find((l) => !l.locked && !l.completed);
    return (currentLecture ?? flatLectures[0]).id;
  }, [flatLectures]);

  const [activeLectureId, setActiveLectureId] = useState(initialActiveId);
  const [completedIds, setCompletedIds] = useState(
    () => new Set(flatLectures.filter((l) => l.completed).map((l) => l.id)),
  );
  const [expandedUnitIds, setExpandedUnitIds] = useState(() => {
    const unitOfActive = courseUnits.find((unit) =>
      unit.lectures.some((l) => l.id === initialActiveId),
    );
    return new Set(unitOfActive ? [unitOfActive.id] : []);
  });
  const [activeTab, setActiveTab] = useState("description");
  const [isPlaying, setIsPlaying] = useState(false);

  const activeLecture = flatLectures.find((l) => l.id === activeLectureId);
  const activeIndex = flatLectures.findIndex((l) => l.id === activeLectureId);
  const prevLecture = activeIndex > 0 ? flatLectures[activeIndex - 1] : null;
  const nextLecture =
    activeIndex < flatLectures.length - 1
      ? flatLectures[activeIndex + 1]
      : null;

  const totalLecturesCount = flatLectures.length;
  const isActiveCompleted = completedIds.has(activeLectureId);
  const activeProgressPercent = isActiveCompleted ? 100 : 0;

  const tabs = [
    { id: "description", label: t("coursePage.tabs.description") },
    { id: "notes", label: t("coursePage.tabs.notes") },
    { id: "resources", label: t("coursePage.tabs.resources", { count: 4 }) },
  ];

  function handleSelectLecture(lecture) {
    if (!lecture || lecture.locked) return;
    setActiveLectureId(lecture.id);
    setIsPlaying(false);
    setActiveTab("description");
  }

  function toggleUnit(unitId) {
    setExpandedUnitIds((prev) => {
      const next = new Set(prev);
      if (next.has(unitId)) next.delete(unitId);
      else next.add(unitId);
      return next;
    });
  }

  function handleMarkComplete() {
    if (activeLecture.locked) return;
    setCompletedIds((prev) => new Set(prev).add(activeLectureId));
  }

  function handleUndoComplete() {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.delete(activeLectureId);
      return next;
    });
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-night" : "bg-light"}`}>
      {/* --------------------------------- */}
      {/* ------ Top Bar: زر العودة فقط ------ */}
      {/* --------------------------------- */}
      <div
        className={`sticky top-0 z-10 border-b px-4 py-3 backdrop-blur-sm sm:px-6 ${
          isDark
            ? "border-[#223028] bg-[#0d1410]/90"
            : "border-[#ede8e0] bg-[#fdfcf8]/90"
        }`}
      >
        <Link
          to="/courses"
          className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
            isDark
              ? "text-[#e8ede8] hover:text-white"
              : "text-[#333] hover:text-black"
          }`}
        >
          <HiArrowLeft className="h-4 w-4" />
          {t("coursePage.backToCourses")}
        </Link>
      </div>

      {/* --------------------------------- */}
      {/* ------ Layout: Sidebar + Content ------ */}
      {/* --------------------------------- */}
      <div className="mx-auto flex max-w-[1600px] flex-col-reverse gap-6 p-4 sm:p-6 lg:flex-row-reverse">
        {/* ------ الشريط الجانبي: محتوى الدورة ------ */}
        <aside
          className={`flex w-full shrink-0 flex-col rounded-2xl border p-5 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-[320px] ${
            isDark
              ? "border-[#223028] bg-[#172019]"
              : "border-[#ede8e0] bg-white"
          }`}
        >
          <h2
            className={`text-lg font-extrabold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}
          >
            {t("coursePage.sidebar.title")}
          </h2>
          <p
            className={`mt-1 text-xs ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
          >
            {t("coursePage.sidebar.unitsCount", { count: courseUnits.length })}
          </p>

          {/* تقدّم الطالب في الدورة */}
          <div className="mt-3">
            <div
              className={`h-1.5 w-full overflow-hidden rounded-full ${isDark ? "bg-[#0d1410]" : "bg-[#f0ede6]"}`}
            >
              <div
                className="bg-primary-green h-full rounded-full transition-all"
                style={{
                  width: `${Math.round((completedIds.size / totalLecturesCount) * 100)}%`,
                }}
              />
            </div>
            <p
              className={`mt-1.5 text-[11px] font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
            >
              {t("coursePage.sidebar.progress", {
                done: completedIds.size,
                total: totalLecturesCount,
              })}
            </p>
          </div>

          <button className="from-primary-green-heavy to-primary-green mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-l py-3 text-sm font-bold text-white shadow-[0_2px_10px_rgba(76,175,80,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_4px_18px_rgba(76,175,80,0.4)]">
            <HiOutlineDocumentArrowDown className="h-4 w-4" />
            {t("coursePage.sidebar.downloadResources")}
          </button>

          <nav className="mt-5 flex flex-col gap-3 overflow-y-auto pe-1 lg:flex-1">
            {courseUnits.map((unit) => {
              const isExpanded = expandedUnitIds.has(unit.id);
              const unitTitle = lang === "en" ? unit.title_en : unit.title_ar;
              const doneInUnit = unit.lectures.filter((l) =>
                completedIds.has(l.id),
              ).length;

              return (
                <div key={unit.id}>
                  <button
                    onClick={() => toggleUnit(unit.id)}
                    className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-1.5 py-1.5 transition-colors ${
                      isDark ? "hover:bg-[#0d1410]" : "hover:bg-[#f7f5ef]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <UnitStatusIcon
                        unit={unit}
                        completedIds={completedIds}
                        activeLectureId={activeLectureId}
                        isDark={isDark}
                      />
                      <span
                        className={`truncate text-sm font-bold ${
                          unit.lectures.every((l) => l.locked)
                            ? isDark
                              ? "text-[#5a7560]"
                              : "text-[#a8b0a8]"
                            : isDark
                              ? "text-[#e8ede8]"
                              : "text-[#333]"
                        }`}
                      >
                        {unitTitle}
                      </span>
                    </span>

                    <span className="flex shrink-0 items-center gap-1.5">
                      <span
                        className={`text-[11px] font-semibold ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
                      >
                        {doneInUnit}/{unit.lectures.length}
                      </span>
                      <HiChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        } ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
                      />
                    </span>
                  </button>

                  {isExpanded && (
                    <ul className="fade-in mt-1.5 mr-[9px] flex flex-col gap-0.5 border-r pr-3 rtl:mr-[9px] rtl:border-r">
                      {unit.lectures.map((lecture) => {
                        const isActive = lecture.id === activeLectureId;
                        const isCompleted = completedIds.has(lecture.id);
                        const lectureTitle =
                          lang === "en" ? lecture.title_en : lecture.title_ar;
                        const isLocked = lecture.locked;

                        return (
                          <li key={lecture.id}>
                            <button
                              disabled={isLocked}
                              onClick={() => handleSelectLecture(lecture)}
                              className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-right text-[13px] font-semibold transition-colors ${
                                isLocked
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
                              } ${
                                isActive
                                  ? isDark
                                    ? "text-primary-green bg-[#0d1410]"
                                    : "text-primary-green-heavy bg-[#eaf5ea]"
                                  : isLocked
                                    ? isDark
                                      ? "text-[#4a5a4e]"
                                      : "text-[#b8bfc4]"
                                    : isDark
                                      ? "text-[#a0b8a5] hover:bg-[#0d1410]"
                                      : "text-[#4a5568] hover:bg-[#f7f5ef]"
                              }`}
                            >
                              <LectureStatusIcon
                                lecture={lecture}
                                isActive={isActive}
                                isCompleted={isCompleted}
                                isDark={isDark}
                              />
                              <span className="truncate">{lectureTitle}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* ------ منطقة العرض: الفيديو والمحتوى ------ */}
        <main className="min-w-0 flex-1">
          {/* مشغل الفيديو */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0a0f0c] shadow-[0_4px_18px_rgba(0,0,0,0.2)]">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform hover:scale-105 sm:h-20 sm:w-20">
                {isPlaying ? (
                  <HiPause className="h-7 w-7 text-white" />
                ) : (
                  <HiPlay className="h-7 w-7 translate-x-[-2px] text-white" />
                )}
              </span>
            </button>

            {/* شريط التحكم */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/70 to-transparent px-4 pt-8 pb-3">
              <div className="relative h-1 w-full rounded-full bg-white/25">
                <div
                  className="bg-primary-green absolute top-0 right-0 h-full rounded-full"
                  style={{ width: `${activeProgressPercent}%` }}
                />
                <span
                  className="bg-primary-green absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
                  style={{ right: `${activeProgressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/90 ltr:text-left">
                  {isActiveCompleted ? "00:00" : "00:00"} /{" "}
                  {lang === "en"
                    ? activeLecture.duration_en
                    : activeLecture.duration_ar}
                </span>
                <div className="flex items-center gap-3">
                  <HiOutlineSpeakerWave className="h-[18px] w-[18px] cursor-pointer text-white/90" />
                  <HiOutlineLanguage className="h-[18px] w-[18px] cursor-pointer text-white/90" />
                  <HiOutlineCog6Tooth className="h-[18px] w-[18px] cursor-pointer text-white/90" />
                  <HiOutlineArrowsPointingOut className="h-[18px] w-[18px] cursor-pointer text-white/90" />
                </div>
              </div>
            </div>
          </div>

          {/* معلومات المحاضرة */}
          <div className="mt-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* العنوان + المعلم + المدة */}
              <div className="min-w-0">
                <p
                  className={`text-xs font-semibold ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
                >
                  {t("coursePage.lectureIndicator", {
                    current: activeIndex + 1,
                    total: totalLecturesCount,
                  })}
                </p>

                <h1
                  className={`mt-2 text-2xl font-extrabold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}
                >
                  {lang === "en"
                    ? activeLecture.title_en
                    : activeLecture.title_ar}
                </h1>

                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <span
                    className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
                  >
                    <HiOutlineClock className="h-4 w-4" />
                    {lang === "en"
                      ? activeLecture.duration_en
                      : activeLecture.duration_ar}
                  </span>
                  <span
                    className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
                  >
                    <HiOutlineUser className="h-4 w-4" />
                    {lang === "en" ? COURSE_TEACHER.en : COURSE_TEACHER.ar}
                  </span>
                </div>
              </div>

              {/* إتمام / التراجع عن إتمام المحاضرة — بجانب العنوان من sm فأعلى، وبنفس الحجم تماماً عبر grid */}
              <div className="hidden shrink-0 sm:grid sm:grid-cols-2 sm:gap-3">
                <button
                  onClick={handleMarkComplete}
                  disabled={isActiveCompleted || activeLecture.locked}
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-2.5 font-bold whitespace-nowrap transition-colors disabled:cursor-not-allowed max-md:text-xs md:px-4 md:py-2 lg:px-5 lg:py-2.5 lg:text-sm ${
                    isActiveCompleted
                      ? isDark
                        ? "border-primary-green/40 bg-primary-green/10 text-primary-green"
                        : "border-primary-green/30 text-primary-green-heavy bg-[#eaf5ea]"
                      : isDark
                        ? "border-[#223028] text-[#e8ede8] hover:bg-[#172019]"
                        : "border-[#ede8e0] text-[#333] hover:bg-[#f7f5ef]"
                  }`}
                >
                  <HiCheckCircle className="h-4 w-4 shrink-0" />
                  {isActiveCompleted
                    ? t("coursePage.completed")
                    : t("coursePage.markComplete")}
                </button>

                <button
                  onClick={handleUndoComplete}
                  disabled={!isActiveCompleted}
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-40 max-md:text-xs md:px-4 md:py-2 lg:px-5 lg:py-2.5 lg:text-sm ${
                    isDark
                      ? "border-[#223028] text-[#a0b8a5] hover:bg-[#172019]"
                      : "border-[#ede8e0] text-[#8a93a6] hover:bg-[#f7f5ef]"
                  }`}
                >
                  <HiArrowUturnLeft className="h-4 w-4 shrink-0" />
                  {t("coursePage.undoComplete")}
                </button>
              </div>
            </div>

            {/* أزرار التنقل بين المحاضرات — عريضان بكامل الحاوية */}
            <div className="mt-5 grid grid-cols-2 gap-6">
              <button
                disabled={!prevLecture}
                onClick={() => handleSelectLecture(prevLecture)}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-40 md:px-4 lg:px-5 lg:py-3 lg:text-sm ${
                  isDark
                    ? "border-[#223028] text-[#e8ede8] hover:bg-[#172019]"
                    : "border-[#ede8e0] text-[#333] hover:bg-[#f7f5ef]"
                }`}
              >
                <HiArrowLeft className="h-4 w-4 shrink-0" />
                {t("coursePage.prevLecture")}
              </button>
              <button
                disabled={!nextLecture || nextLecture.locked}
                onClick={() => handleSelectLecture(nextLecture)}
                className="from-primary-green-heavy to-primary-green flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-l px-5 py-3 text-sm font-bold text-white shadow-[0_2px_10px_rgba(76,175,80,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_4px_18px_rgba(76,175,80,0.4)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-[0_2px_10px_rgba(76,175,80,0.25)] md:px-4 lg:px-5 lg:py-3 lg:text-sm"
              >
                {t("coursePage.nextLecture")}
                <HiArrowRight className="h-4 w-4 shrink-0" />
              </button>
            </div>

            {/* إتمام / التراجع عن إتمام المحاضرة — نسخة الموبايل، أسفل زري التنقل وبكامل الحاوية */}
            <div className="mt-3 grid grid-cols-2 gap-6 sm:hidden">
              <button
                onClick={handleMarkComplete}
                disabled={isActiveCompleted || activeLecture.locked}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed ${
                  isActiveCompleted
                    ? isDark
                      ? "border-primary-green/40 bg-primary-green/10 text-primary-green"
                      : "border-primary-green/30 text-primary-green-heavy bg-[#eaf5ea]"
                    : isDark
                      ? "border-[#223028] text-[#e8ede8] hover:bg-[#172019]"
                      : "border-[#ede8e0] text-[#333] hover:bg-[#f7f5ef]"
                }`}
              >
                <HiCheckCircle className="h-4 w-4 shrink-0" />
                {isActiveCompleted
                  ? t("coursePage.completed")
                  : t("coursePage.markComplete")}
              </button>

              <button
                onClick={handleUndoComplete}
                disabled={!isActiveCompleted}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  isDark
                    ? "border-[#223028] text-[#a0b8a5] hover:bg-[#172019]"
                    : "border-[#ede8e0] text-[#8a93a6] hover:bg-[#f7f5ef]"
                }`}
              >
                <HiArrowUturnLeft className="h-4 w-4 shrink-0" />
                {t("coursePage.undoComplete")}
              </button>
            </div>

            {/* التبويبات */}
            <div
              className={`mt-6 flex gap-6 border-b ${isDark ? "border-[#223028]" : "border-[#ede8e0]"}`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex cursor-pointer items-center gap-1.5 pb-3 text-sm font-bold transition-colors ${
                    activeTab === tab.id
                      ? "text-primary-green-heavy"
                      : isDark
                        ? "text-[#5a7560] hover:text-[#a0b8a5]"
                        : "text-[#8a93a6] hover:text-[#4a5568]"
                  }`}
                >
                  {tab.id === "notes" && (
                    <HiOutlineChatBubbleBottomCenterText className="h-4 w-4" />
                  )}
                  {tab.id === "resources" && (
                    <HiOutlinePaperClip className="h-4 w-4" />
                  )}
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="bg-primary-green absolute right-0 -bottom-px left-0 h-[2px] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* محتوى التبويب */}
            <div className="pt-5">
              {activeTab === "description" && (
                <>
                  <p
                    className={`leading-relaxed ${isDark ? "text-[#a0b8a5]" : "text-[#555]"}`}
                  >
                    {(lang === "en"
                      ? activeLecture.description_en
                      : activeLecture.description_ar) ??
                      t("coursePage.noDescription")}
                  </p>

                  {(lang === "en"
                    ? activeLecture.points_en
                    : activeLecture.points_ar) && (
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {(lang === "en"
                        ? activeLecture.points_en
                        : activeLecture.points_ar
                      ).map((point) => (
                        <li
                          key={point}
                          className={`flex items-start gap-2 text-sm ${isDark ? "text-[#a0b8a5]" : "text-[#555]"}`}
                        >
                          <span className="bg-primary-green mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {activeTab === "notes" && (
                <p
                  className={`text-sm ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
                >
                  {t("coursePage.noNotes")}
                </p>
              )}

              {activeTab === "resources" && (
                <p
                  className={`text-sm ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
                >
                  {t("coursePage.noResources")}
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoursePage;
