import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function CardHeader() {
  const isDark = useSelector((state) => state.general.isDark);

  const { t } = useTranslation();

  const className = {
    classNameTodayLesson: `text-[15px] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,
    classNameTodayLessonDetails: `mt-0.5 text-xs ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,
  };
  
  return (
    <div className="mb-5.5 flex items-center gap-3.5">
      <div>
        <div className={className.classNameTodayLesson}>
          {t("hero.visualSide.todayLesson")}
        </div>
        <div className={className.classNameTodayLessonDetails}>
          {t("hero.visualSide.todayLessonDetails")}
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
