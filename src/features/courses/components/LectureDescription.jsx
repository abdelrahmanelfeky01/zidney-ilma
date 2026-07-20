import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePaperClip,
} from "react-icons/hi2";

/* ================================================================== */
/* LectureDescription                                                  */
/* جزء وصف المحاضرة: رؤوس التبويبات (الوصف / ملاحظاتي / المرفقات)        */
/* ومحتوى تبويب "الوصف" فقط، باعتباره التبويب النشط افتراضياً هنا.        */
/* نسخة Static بالكامل.                                                */
/*                                                                      */
/* لاحقاً عند إضافة المنطق: سيُضاف useState لتحديد التبويب النشط،        */
/* وسيتم عرض محتوى كل تبويب (notes / resources) بشرط بسيط بدل عرض        */
/* تبويب "الوصف" فقط كما هنا.                                           */
/* ================================================================== */
function LectureDescription() {
  return (
    <div className="mt-6">
      {/* ------ رؤوس التبويبات ------ */}
      <div className="flex gap-6 border-b border-[#ede8e0]">
        <button className="text-primary-green-heavy 420:text-sm 300:text-xs relative flex items-center gap-1.5 pb-3 font-bold">
          Lecture description
          <span className="bg-primary-green absolute right-0 -bottom-px left-0 h-[2px] rounded-full" />
        </button>

        <button className="420:text-sm 300:text-xs flex items-center gap-1.5 pb-3 font-bold text-[#8a93a6] hover:text-[#4a5568]">
          <HiOutlineChatBubbleBottomCenterText className="h-4 w-4" />
          Notes
        </button>

        <button className="420:text-sm 300:text-xs flex items-center gap-1.5 pb-3 font-bold text-[#8a93a6] hover:text-[#4a5568]">
          <HiOutlinePaperClip className="h-4 w-4" />
          Resources (2)
        </button>
      </div>

      {/* ------ محتوى تبويب "الوصف" ------ */}
      <div className="pt-5">
        <p className="leading-relaxed text-[#555]">
          In this lecture we cover in detail the articulation points coming from
          the tongue, the most branched of all points. We focus on the ten
          regions and the 18 letters that belong to it.
        </p>

        <ul className="mt-4 flex flex-col gap-2.5">
          <li className="flex items-start gap-2 text-sm text-[#555]">
            <span className="bg-primary-green mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            Back of the tongue: Qaf and Kaf
          </li>
          <li className="flex items-start gap-2 text-sm text-[#555]">
            <span className="bg-primary-green mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            Middle of the tongue: Jeem, Sheen and Ya
          </li>
          <li className="flex items-start gap-2 text-sm text-[#555]">
            <span className="bg-primary-green mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            Edge of the tongue: Dhad and Lam
          </li>
          <li className="flex items-start gap-2 text-sm text-[#555]">
            <span className="bg-primary-green mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            Tip of the tongue: Noon and Ra
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LectureDescription;
