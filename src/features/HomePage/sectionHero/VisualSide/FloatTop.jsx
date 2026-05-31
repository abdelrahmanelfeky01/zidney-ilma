import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function FloatTop() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  const className = {
    classNameContainer: `absolute z-10 flex items-center gap-2.5 rounded-[14px] border px-3.5 py-2.5 text-[13px] font-medium whitespace-nowrap ${
      isDark ? "border-[#223028] bg-[#172019]" : "border-[#e8e0d0] bg-white"
    } ${curLang === "en" ? "-top-8 -right-2 lg:-top-8 lg:-right-7" : "-top-8 -left-2 lg:-top-8 lg:-left-7"}`,

    stylesContainer: {
      boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
      animation: "float1 3s ease-in-out infinite",
    },

    classNameEmoji: `flex h-7.5 w-7.5 items-center justify-center rounded-lg text-[15px] ${isDark ? "bg-[rgba(76,175,80,0.2)]" : "bg-[#E8F5E9]"}`,

    classNameFloatTitle: `text-[11px] ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,

    classNameFloatDescription: `text-xs font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,
  };
  
  return (
    <div
      className={className.classNameContainer}
      style={className.stylesContainer}
    >
      <div className={className.classNameEmoji}>🏅</div>
      <div>
        <div className={className.classNameFloatTitle}>
          {t("hero.visualSide.floatTopTitle")}
        </div>
        <div className={className.classNameFloatDescription}>
          {t("hero.visualSide.floatTopDescription")}
        </div>
      </div>
    </div>
  );
}

export default FloatTop;
