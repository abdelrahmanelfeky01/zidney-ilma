import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUturnLeft,
  HiPlay,
  HiCheckCircle,
  HiOutlineArrowsPointingOut,
  HiOutlineSpeakerWave,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineLanguage,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

/* ================================================================== */
/* LectureViewer                                                       */
/* جزء عرض المحاضرة: مشغل الفيديو + معلومات المحاضرة الحالية + أزرار     */
/* الإتمام والتنقل بين المحاضرات. نسخة Static بالكامل.                   */
/*                                                                      */
/* ملاحظة مهمة عن تفادي التكرار (وهي بيت القصيد في الطلب):               */
/* في الكود الأصلي كانت أزرار "Mark as complete / Undo completion"       */
/* مكتوبة مرتين بالكامل: نسخة مخفية على الموبايل وظاهرة من sm فأعلى،      */
/* ونسخة عكسها تماماً. هنا تم وضع الأزرار مرة واحدة فقط في JSX،          */
/* والتحكم بمكان ظهورها بين الموبايل والكمبيوتر يتم فقط عبر flex-wrap    */
/* + order (بدون أي تكرار للعناصر نفسها):                                */
/*                                                                      */
/*   - الحاوية الأب: flex-col حتى md، ثم flex-row flex-wrap من md فأعلى. */
/*   - قبل md (عمودي): العنوان(order-1) ← التنقل(order-2) ← الإتمام       */
/*     (order-3).                                                       */
/*   - من md فأعلى (أفقي): العنوان(order-1) والإتمام(order-2) في نفس      */
/*     الصف، ثم التنقل(order-3) ينزل لصف مستقل تلقائياً لأنه w-full       */
/*     فلا يتّسع بجانبهما فيلتف (wrap) للأسفل.                           */
/* ================================================================== */
function LectureViewer() {
  return (
    <div>
      {/* ------ مشغل الفيديو ------ */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0a0f0c] shadow-[0_4px_18px_rgba(0,0,0,0.2)]">
        <button className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm sm:h-20 sm:w-20">
            <HiPlay className="h-7 w-7 -translate-x-0.5 text-white" />
          </span>
        </button>

        {/* شريط التحكم أسفل الفيديو */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-linear-to-t from-black/70 to-transparent px-4 pt-8 pb-3">
          <div className="relative h-1 w-full rounded-full bg-white/25">
            <div className="bg-primary-green absolute top-0 right-0 h-full w-0 rounded-full" />
            <span className="bg-primary-green absolute top-1/2 right-0 h-2.5 w-2.5 -translate-y-1/2 rounded-full" />
          </div>

          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/90 ltr:text-left">
              00:00 / 28 min
            </span>
            <div className="flex items-center gap-3">
              <HiOutlineSpeakerWave className="h-4.5 w-4.5 text-white/90" />
              <HiOutlineLanguage className="h-4.5 w-4.5 text-white/90" />
              <HiOutlineCog6Tooth className="h-4.5 w-4.5 text-white/90" />
              <HiOutlineArrowsPointingOut className="h-4.5 w-4.5 text-white/90" />
            </div>
          </div>
        </div>
      </div>

      {/* ------ معلومات المحاضرة الحالية ------ */}
      <div className="mt-5">
        {/* حاوية واحدة فقط لكل من العنوان + الإتمام + التنقل، وترتيبها
            الظاهر يتغيّر عبر order بحسب حجم الشاشة (بدون تكرار JSX).
            نقطة التحويل هنا md (وليست sm) بناءً على طلبك. */}
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
          {/* عنوان المحاضرة + معلومات المعلم والمدة */}
          <div className="order-1 min-w-0 md:flex-1">
            <p className="text-xs font-semibold text-[#8a93a6]">
              Lecture 4 of 6
            </p>

            <h1 className="mt-2 text-2xl font-extrabold text-[#1a1f2e]">
              Tongue Letters Articulation
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#4a5568]">
                <HiOutlineClock className="h-4 w-4" />
                28 min
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#4a5568]">
                <HiOutlineUser className="h-4 w-4" />
                Dr. Ahmed Mansour
              </span>
            </div>
          </div>

          {/* أزرار إتمام / تراجع عن إتمام المحاضرة (مكتوبة مرة واحدة فقط) */}
          <div className="order-3 grid shrink-0 grid-cols-2 gap-3 md:order-2">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#ede8e0] px-5 py-2.5 text-sm font-bold whitespace-nowrap text-[#8a93a6] opacity-40">
              <HiArrowUturnLeft className="h-4 w-4 shrink-0" />
              Undo completion
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#ede8e0] px-5 py-2.5 text-sm font-bold whitespace-nowrap text-[#333] hover:bg-[#f7f5ef]">
              <HiCheckCircle className="h-4 w-4 shrink-0" />
              Mark as complete
            </button>
          </div>

          {/* أزرار التنقل بين المحاضرات (السابقة / التالية) */}
          <div className="order-2 grid w-full grid-cols-2 gap-3 md:order-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#ede8e0] px-5 py-3 text-sm font-bold text-[#333] hover:bg-[#f7f5ef]">
              <span className="flex items-center justify-center gap-2">
                {window.innerWidth >= 420 ? "Previous lecture" : "Previous"}

                <HiArrowLeft className="h-4 w-4 shrink-0" />
              </span>
            </button>
            <button className="from-primary-green-heavy to-primary-green flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-l px-5 py-3 text-sm font-bold text-white shadow-[0_2px_10px_rgba(76,175,80,0.25)]">
              <span className="flex items-center justify-center gap-2">
                {window.innerWidth >= 420 ? "Next lecture" : "Next"}
                <HiArrowRight className="h-4 w-4 shrink-0" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureViewer;
