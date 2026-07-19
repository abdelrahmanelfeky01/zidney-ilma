import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  HiArrowLeft,
  HiOutlineCog6Tooth,
  HiOutlineBell,
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
  HiStar,
  HiOutlineLanguage,
} from "react-icons/hi2";

/* --------------------------------- */
/* ------ Mock Data (مؤقت لحين ربط Supabase) ------ */
/* --------------------------------- */

const courseUnits = [
  {
    id: "unit-1",
    titleAr: "الوحدة الأولى: مقدمة",
    status: "completed",
    lectures: [
      {
        id: "lec-11",
        titleAr: "أهمية علم التجويد",
        status: "completed",
      },
    ],
  },
  {
    id: "unit-2",
    titleAr: "الوحدة الثانية: المخارج",
    status: "current",
    lectures: [
      {
        id: "lec-21",
        titleAr: "مقدمة المخارج العامة",
        status: "completed",
      },
      {
        id: "lec-22",
        titleAr: "مخرج الجوف والحلق",
        status: "completed",
      },
      {
        id: "lec-23",
        titleAr: "مخارج حروف اللسان",
        status: "active",
        breadcrumb: ["الكورسات", "أحكام التجويد", "مخارج الحروف"],
        durationAr: "28 دقيقة",
        rating: 4.9,
        ratingCountAr: "1.2k",
        teacherAr: "د. أحمد منصور",
        currentTimeAr: "12:45",
        totalTimeAr: "28:00",
        progressPercent: 46,
        descriptionAr:
          "في هذه المحاضرة سنتناول بالتفصيل مخارج الحروف التي تخرج من اللسان، وهو أكثر مخارج الحروف وأكثرها تفرعًا، سنركز على المناطق العشرة والحروف الـ18 التي تنتسب إليه.",
        pointsAr: [
          "أقصى اللسان: القاف والكاف",
          "وسط اللسان: الجيم والشين والياء",
          "حافة اللسان: الضاد واللام",
          "طرف اللسان: النون والراء",
        ],
      },
      {
        id: "lec-24",
        titleAr: "مخرج الشفتين والخيشوم",
        status: "notStarted",
      },
    ],
  },
  {
    id: "unit-3",
    titleAr: "الوحدة الثالثة: الصفات",
    status: "locked",
    lectures: [
      {
        id: "lec-31",
        titleAr: "الصفات المتضادة",
        status: "locked",
      },
    ],
  },
];

const tabs = [
  { id: "description", labelAr: "وصف المحاضرة" },
  { id: "notes", labelAr: "ملاحظاتي" },
  { id: "resources", labelAr: "الموارد (٤)" },
];

/* --------------------------------- */
/* ------ Helpers ------ */
/* --------------------------------- */

// إيجاد أول محاضرة نشطة كافتراضي عند فتح الصفحة
function findInitialLecture() {
  for (const unit of courseUnits) {
    for (const lecture of unit.lectures) {
      if (lecture.status === "active") return lecture;
    }
  }
  return courseUnits[0].lectures[0];
}

function LectureStatusIcon({ status, isDark }) {
  if (status === "completed") {
    return <HiCheckCircle className="text-primary-green h-[18px] w-[18px] shrink-0" />;
  }
  if (status === "locked") {
    return (
      <HiLockClosed
        className={`h-[15px] w-[15px] shrink-0 ${isDark ? "text-[#5a7560]" : "text-[#a8b0a8]"}`}
      />
    );
  }
  if (status === "active") {
    return (
      <span className="bg-primary-green flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full">
        <HiPlay className="h-2.5 w-2.5 text-white" />
      </span>
    );
  }
  // notStarted
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
  const { t } = useTranslation();

  const [activeLecture, setActiveLecture] = useState(findInitialLecture);
  const [activeTab, setActiveTab] = useState("description");
  const [isPlaying, setIsPlaying] = useState(false);

  const totalLecturesCount = courseUnits.reduce(
    (sum, unit) => sum + unit.lectures.length,
    0,
  );
  const currentLectureIndex =
    courseUnits
      .flatMap((unit) => unit.lectures)
      .findIndex((lecture) => lecture.id === activeLecture.id) + 1;

  function handleSelectLecture(lecture) {
    if (lecture.status === "locked") return;
    setActiveLecture(lecture);
    setIsPlaying(false);
    setActiveTab("description");
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-night" : "bg-light"}`}>
      {/* --------------------------------- */}
      {/* ------ Top Bar ------ */}
      {/* --------------------------------- */}
      <header
        className={`sticky top-0 z-10 flex items-center justify-between border-b px-4 py-3 backdrop-blur-sm sm:px-6 ${
          isDark
            ? "border-[#223028] bg-[#0d1410]/90"
            : "border-[#ede8e0] bg-[#fdfcf8]/90"
        }`}
      >
        {/* أيقونات المستخدم */}
        <div className="flex items-center gap-3">
          <button
            className={`relative rounded-full p-2 transition-colors ${
              isDark ? "hover:bg-[#172019]" : "hover:bg-[#f0ede6]"
            }`}
          >
            <HiOutlineBell
              className={`h-5 w-5 ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
            />
          </button>
          <button
            className={`rounded-full p-2 transition-colors ${
              isDark ? "hover:bg-[#172019]" : "hover:bg-[#f0ede6]"
            }`}
          >
            <HiOutlineCog6Tooth
              className={`h-5 w-5 ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
            />
          </button>
          <div
            className={`h-8 w-8 rounded-full border-2 ${
              isDark ? "border-[#223028] bg-[#0d1410]" : "border-[#e2d9cc] bg-[#1a1f2e]"
            }`}
          />
        </div>

        {/* التنقل والحالة */}
        <div className="flex items-center gap-3">
          <button
            className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
              isDark
                ? "text-[#e8ede8] hover:text-white"
                : "text-[#333] hover:text-black"
            }`}
          >
            تفاصيل الكورس
            <HiArrowLeft className="h-4 w-4" />
          </button>

          <span className="bg-primary-yellow rounded-md px-2.5 py-1 text-xs font-bold text-white">
            القسم الثاني
          </span>

          <span
            className={`rounded-md px-2.5 py-1 text-xs font-bold ${
              isDark
                ? "bg-[#172019] text-[#a0b8a5]"
                : "bg-[#f0ede6] text-[#4a5568]"
            }`}
          >
            المحاضرة {currentLectureIndex} من {totalLecturesCount}
          </span>
        </div>
      </header>

      {/* --------------------------------- */}
      {/* ------ Layout: Sidebar + Content ------ */}
      {/* --------------------------------- */}
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 p-4 sm:p-6 lg:flex-row-reverse">
        {/* ------ الشريط الجانبي ------ */}
        <aside
          className={`h-fit w-full shrink-0 rounded-2xl border p-5 lg:sticky lg:top-20 lg:w-[300px] ${
            isDark
              ? "border-[#223028] bg-[#172019]"
              : "border-[#ede8e0] bg-white"
          }`}
        >
          <h2
            className={`text-lg font-extrabold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}
          >
            محتوى الدورة
          </h2>
          <p
            className={`mt-1 text-xs ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
          >
            {courseUnits.length} وحدات تعليمية
          </p>

          <button className="from-primary-green-heavy to-primary-green mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-l py-3 text-sm font-bold text-white shadow-[0_2px_10px_rgba(76,175,80,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_4px_18px_rgba(76,175,80,0.4)]">
            <HiOutlineDocumentArrowDown className="h-4 w-4" />
            تحميل المصادر
          </button>

          <nav className="mt-5 flex flex-col gap-4">
            {courseUnits.map((unit) => (
              <div key={unit.id}>
                <div className="mb-1.5 flex items-center gap-2">
                  <LectureStatusIcon status={unit.status} isDark={isDark} />
                  <span
                    className={`text-sm font-bold ${
                      unit.status === "locked"
                        ? isDark
                          ? "text-[#5a7560]"
                          : "text-[#a8b0a8]"
                        : isDark
                          ? "text-[#e8ede8]"
                          : "text-[#333]"
                    }`}
                  >
                    {unit.titleAr}
                  </span>
                </div>

                <ul className="flex flex-col gap-0.5 border-r pr-3 mr-[9px] rtl:border-r rtl:mr-[9px]">
                  {unit.lectures.map((lecture) => {
                    const isActive = lecture.id === activeLecture.id;
                    const isLocked = lecture.status === "locked";
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
                                ? "bg-[#0d1410] text-primary-green"
                                : "bg-[#eaf5ea] text-primary-green-heavy"
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
                            status={lecture.status}
                            isDark={isDark}
                          />
                          <span className="truncate">{lecture.titleAr}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* ------ منطقة العرض ------ */}
        <main className="min-w-0 flex-1">
          {/* مشغل الفيديو */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0a0f0c] shadow-[0_4px_18px_rgba(0,0,0,0.2)]">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform hover:scale-105">
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
                  style={{ width: `${activeLecture.progressPercent ?? 0}%` }}
                />
                <span
                  className="bg-primary-green absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
                  style={{
                    right: `${activeLecture.progressPercent ?? 0}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/90 ltr:text-left">
                  {activeLecture.currentTimeAr ?? "00:00"} /{" "}
                  {activeLecture.totalTimeAr ?? "00:00"}
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
            <p
              className={`text-xs font-semibold ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
            >
              {(activeLecture.breadcrumb ?? ["الكورسات"]).join("  ›  ")}
            </p>

            <h1
              className={`mt-2 text-2xl font-extrabold ${isDark ? "text-[#f0ede6]" : "text-[#1a1f2e]"}`}
            >
              {activeLecture.titleAr}
            </h1>

            {activeLecture.rating && (
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <span
                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                    isDark
                      ? "bg-[#172019] text-primary-yellow"
                      : "bg-[#fff8e8] text-[#b8860b]"
                  }`}
                >
                  <HiStar className="text-primary-yellow h-3.5 w-3.5" />
                  {activeLecture.rating} ({activeLecture.ratingCountAr})
                </span>
                <span
                  className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
                >
                  <HiOutlineClock className="h-4 w-4" />
                  {activeLecture.durationAr}
                </span>
                <span
                  className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-[#a0b8a5]" : "text-[#4a5568]"}`}
                >
                  <HiOutlineUser className="h-4 w-4" />
                  {activeLecture.teacherAr}
                </span>
              </div>
            )}

            {/* أزرار التنقل */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="from-primary-green-heavy to-primary-green flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-l px-5 py-2.5 text-sm font-bold text-white shadow-[0_2px_10px_rgba(76,175,80,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_4px_18px_rgba(76,175,80,0.4)]">
                المحاضرة التالية
              </button>
              <button
                className={`cursor-pointer rounded-xl border px-5 py-2.5 text-sm font-bold transition-colors ${
                  isDark
                    ? "border-[#223028] text-[#e8ede8] hover:bg-[#172019]"
                    : "border-[#ede8e0] text-[#333] hover:bg-[#f7f5ef]"
                }`}
              >
                المحاضرة السابقة
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
                  {tab.labelAr}
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
                    {activeLecture.descriptionAr ??
                      "لا يوجد وصف متاح لهذه المحاضرة بعد."}
                  </p>

                  {activeLecture.pointsAr && (
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {activeLecture.pointsAr.map((point) => (
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
                  لم تقم بإضافة أي ملاحظات على هذه المحاضرة بعد.
                </p>
              )}

              {activeTab === "resources" && (
                <p
                  className={`text-sm ${isDark ? "text-[#5a7560]" : "text-[#8a93a6]"}`}
                >
                  الموارد الخاصة بهذه المحاضرة ستظهر هنا.
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
