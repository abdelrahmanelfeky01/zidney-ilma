import { useTranslation } from "react-i18next";
import { CheckIcon, ZoomIcon } from "../../../../ui/Icons";
import { liveSessionsCard } from "../../../../data/liveSessionsCard";
import { useSelector } from "react-redux";

function CardsGrid() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  const className = {
    classNameContainer: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",

    classNameGridContainer: `relative cursor-pointer overflow-hidden rounded-[22px] border p-7 transition-all duration-300 hover:-translate-y-1.25 flex flex-col ${
      isDark ? "border-[#223028] bg-[#172019]" : "border-[#e8e0d0] bg-white"
    }`,

    classNameTopBar: "absolute top-0 right-0 left-0 h-1 rounded-t-[22px]",

    stylesTopBar: {
      background: "linear-gradient(90deg, #4CAF50, #FFC107)",
    },

    classNameHeaderCardContainer:
      "mb-4.5 flex items-start justify-between gap-3",

    classNameCardIcon:
      "flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-2xl text-2xl",

    stylesCardIcon: {
      background: "linear-gradient(135deg, #4CAF50, #388E3C)",
    },

    classNameCardPriceContainer: "flex flex-col items-end gap-1.5",

    classNameCardType: `flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-bold ${
      isDark
        ? "bg-[rgba(249,168,37,0.2)] text-[#FFE082]"
        : "bg-[#FFF8E1] text-[#F57F17]"
    }`,

    classNamePrice: `font-['Cairo'] text-[22px] font-extrabold ${isDark ? "text-primary-yellow-light" : "text-primary-yellow"}`,

    classNamePer: `text-[13px] font-medium ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,

    classNameCardTitle: `mb-2 text-[17px] leading-[1.4] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,

    classNameCardDescription: `mb-5 text-sm leading-[1.7] flex-1 ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,

    classNameCardFeatures: `flex items-center gap-2.5 text-[13px] ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,

    classNameCheckIcon: `flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${isDark ? "bg-[rgba(76,175,80,0.2)]" : "bg-[#E8F5E9]"} ${isDark ? "text-primary-green" : "text-primary-green-heavy"}`,

    classNameCardButton:
      "flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-none bg-primary-green py-3.25 font-['Cairo'] text-sm font-bold text-white transition-all duration-300 hover:-translate-y-px hover:bg-primary-green-heavy",
  };

  return (
    <div className={className.classNameContainer}>
      {liveSessionsCard.map((c, i) => (
        <div key={i} className={className.classNameGridContainer}>
          {/* Top gradient bar */}
          <div
            className={className.classNameTopBar}
            style={className.stylesTopBar}
          />

          {/* Header */}
          <div className={className.classNameHeaderCardContainer}>
            <div
              className={className.classNameCardIcon}
              style={className.stylesCardIcon}
            >
              {c.emoji}
            </div>
            <div className={className.classNameCardPriceContainer}>
              <div className={className.classNameCardType}>
                <ZoomIcon />
                <span>{t("homePage.liveSessions.type")}</span>
              </div>
              <div className={className.classNamePrice}>
                {c.price}
                <span className={className.classNamePer}>
                  {" "}
                  {curLang === "en" ? c.perEn : c.perAr}
                </span>
              </div>
            </div>
          </div>

          <div className={className.classNameCardTitle}>
            {curLang === "en" ? c.titleEn : c.titleAr}
          </div>
          <div className={className.classNameCardDescription}>
            {curLang === "en" ? c.descEn : c.descAr}
          </div>

          {/* Features */}
          <div className="mb-5.5 flex flex-col gap-2">
            {(curLang === "en" ? c.featuresEn : c.featuresAr).map((f, j) => (
              <div key={j} className={className.classNameCardFeatures}>
                <div className={className.classNameCheckIcon}>
                  <CheckIcon />
                </div>
                {f}
              </div>
            ))}
          </div>

          <button className={className.classNameCardButton}>
            {t("homePage.liveSessions.button")}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardsGrid;
