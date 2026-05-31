import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function BesmAllah() {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameContainer:
      "mb-6 inline-flex items-center gap-2.5 rounded-[50px] border border-[rgba(255,193,7,0.4)] px-5 py-2",

    stylesContainer: {
      background:
        "linear-gradient(135deg, rgba(255,193,7,0.15), rgba(200,169,110,0.05))",
    },
    classNameText: `text-xs tracking-wide sm:text-lg ${isDark ? "text-[#FFE082]" : "text-primary-yellow"}`,
  };

  return (
    <div
      className={className.classNameContainer}
      style={className.stylesContainer}
    >
      <span className={className.classNameText}>
        {t("hero.contentSide.besmAllah")}
      </span>
    </div>
  );
}

export default BesmAllah;
