import { HiChevronDown, HiOutlineDocumentArrowDown } from "react-icons/hi2";
import StatusIcon from "./StatusIcon";

/* ================================================================== */
/* CourseSidebar                                                       */
/* جزء الـ nav: الشريط الجانبي لمحتوى الدورة (الوحدات + المحاضرات).       */
/* نسخة Static بالكامل بدون أي state - فقط لعرض الشكل النهائي.           */
/*                                                                      */
/* لاحقاً عند إضافة المنطق:                                             */
/*   - الوحدات والمحاضرات ستأتي من مصفوفة بيانات (map) بدل التكرار اليدوي*/
/*   - الطي/التوسيع لكل وحدة سيُبنى بـ useState (Set من IDs المفتوحة)    */
/*   - status لكل StatusIcon سيُحسب من بيانات completed/locked/active   */
/* ================================================================== */
function CourseSidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col rounded-2xl border border-[#ede8e0] bg-white p-5 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-[320px]">
      {/* ------ عنوان الشريط الجانبي وعدد الوحدات ------ */}
      <h2 className="text-lg font-extrabold text-[#1a1f2e]">Course content</h2>
      <p className="mt-1 text-xs text-[#8a93a6]">3 units</p>

      {/* ------ شريط تقدّم الطالب في الدورة ككل ------ */}
      <div className="mt-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f0ede6]">
          <div className="bg-primary-green h-full w-1/2 rounded-full" />
        </div>
        <p className="mt-1.5 text-[11px] font-semibold text-[#4a5568]">
          3 of 6 lectures completed
        </p>
      </div>

      {/* ------ زر تحميل مرفقات الدورة ------ */}
      {/* <button className="from-primary-green-heavy to-primary-green mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l py-3 text-sm font-bold text-white shadow-[0_2px_10px_rgba(76,175,80,0.25)]">
        <HiOutlineDocumentArrowDown className="h-4 w-4" />
        Download resources
      </button> */}

      {/* ------ قائمة الوحدات والمحاضرات ------ */}
      <nav className="mt-5 flex flex-col gap-3 overflow-y-auto pe-1 lg:flex-1">
        {/* ---- الوحدة 1: مكتملة ومطوية ---- */}
        <div>
          <button className="flex w-full items-center justify-between gap-2 rounded-lg px-1.5 py-1.5 hover:bg-[#f7f5ef]">
            <span className="flex min-w-0 items-center gap-2">
              <StatusIcon status="completed" />
              <span className="truncate text-sm font-bold text-[#333]">
                Unit 1: Introduction
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5">
              <span className="text-[11px] font-semibold text-[#8a93a6]">
                1/1
              </span>
              <HiChevronDown className="h-4 w-4 shrink-0 text-[#8a93a6]" />
            </span>
          </button>
        </div>

        {/* ---- الوحدة 2: قيد التقدم ومفتوحة (توضّح شكل قائمة المحاضرات) ---- */}
        <div>
          <button className="flex w-full items-center justify-between gap-2 rounded-lg px-1.5 py-1.5 hover:bg-[#f7f5ef]">
            <span className="flex min-w-0 items-center gap-2">
              <StatusIcon status="active" />
              <span className="truncate text-sm font-bold text-[#333]">
                Unit 2: Articulation Points
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5">
              <span className="text-[11px] font-semibold text-[#8a93a6]">
                2/4
              </span>
              <HiChevronDown className="h-4 w-4 shrink-0 rotate-180 text-[#8a93a6]" />
            </span>
          </button>

          {/* قائمة محاضرات الوحدة المفتوحة */}
          <ul className="mt-1.5 mr-[9px] flex flex-col gap-0.5 border-r border-[#ede8e0] pr-3">
            <li>
              <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-right text-[13px] font-semibold text-[#4a5568] hover:bg-[#f7f5ef]">
                <StatusIcon status="completed" />
                <span className="truncate">
                  Introduction to Articulation Points
                </span>
              </button>
            </li>
            <li>
              <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-right text-[13px] font-semibold text-[#4a5568] hover:bg-[#f7f5ef]">
                <StatusIcon status="completed" />
                <span className="truncate">The Oral Cavity and Throat</span>
              </button>
            </li>
            {/* المحاضرة الحالية / النشطة */}
            <li>
              <button className="text-primary-green-heavy flex w-full items-center gap-2.5 rounded-lg bg-[#eaf5ea] px-2.5 py-2 text-right text-[13px] font-semibold">
                <StatusIcon status="active" />
                <span className="truncate">Tongue Letters Articulation</span>
              </button>
            </li>
            <li>
              <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-right text-[13px] font-semibold text-[#4a5568] hover:bg-[#f7f5ef]">
                <StatusIcon status="pending" />
                <span className="truncate">Lips and Nasal Cavity</span>
              </button>
            </li>
          </ul>
        </div>

        {/* ---- الوحدة 3: مقفلة ومطوية ---- */}
        <div>
          <button
            disabled
            className="flex w-full cursor-not-allowed items-center justify-between gap-2 rounded-lg px-1.5 py-1.5"
          >
            <span className="flex min-w-0 items-center gap-2">
              <StatusIcon status="locked" />
              <span className="truncate text-sm font-bold text-[#a8b0a8]">
                Unit 3: Letter Attributes
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5">
              <span className="text-[11px] font-semibold text-[#8a93a6]">
                0/1
              </span>
              <HiChevronDown className="h-4 w-4 shrink-0 text-[#8a93a6]" />
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default CourseSidebar;
