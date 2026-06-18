import { useTranslation } from "react-i18next";
import { zoomPills } from "../../../../data/zoomPills";
import { TbBrandZoom } from "react-icons/tb";

function ZoomBox() {
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  const className = {
    classNameBoxContainer:
      "relative mb-13 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl px-6 py-8 sm:px-10 sm:py-12 md:grid-cols-[1fr_auto]",

    stylesBoxContainer: {
      background: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
    },

    classNameTopLeft:
      "absolute -top-15 -left-15 h-50 w-50 rounded-full bg-[rgba(255,255,255,0.05)]",

    classNameBottomRight:
      "absolute right-15 -bottom-10 h-37.5 w-37.5 rounded-full bg-[rgba(255,193,7,0.1)]",

    classNameSubtitle:
      "mb-2.5 text-[11px] font-bold tracking-[0.15em] text-[rgba(255,255,255,0.6)] uppercase",

    classNameTitle:
      "mb-3 text-[clamp(22px,3vw,34px)] leading-[1.3] font-bold text-white",

    classNameDescription:
      "max-w-130 text-[15px] leading-[1.7] text-[rgba(255,255,255,0.75)]",

    classNameFeaturesContainer:
      "relative z-10 flex flex-col items-center gap-3",

    classNameIcon:
      "flex h-20 w-20 items-center justify-center rounded-[20px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.12)] text-[40px]",

    classNameFeatures:
      "flex items-center gap-2 rounded-[10px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.12)] px-3.5 py-2 text-xs font-semibold whitespace-nowrap text-[rgba(255,255,255,0.9)]",

    classNameFeatureElement:
      "h-1.75 w-1.75 shrink-0 rounded-full bg-primary-yellow",
  };

  return (
    <div
      className={className.classNameBoxContainer}
      style={className.stylesBoxContainer}
    >
      <div className={className.classNameTopLeft} />
      <div className={className.classNameBottomRight} />

      <div className="relative z-10">
        <div className={className.classNameSubtitle}>
          {t("homePage.liveSessions.zoomBoxSubtitle")}
        </div>
        <h3 className={className.classNameTitle}>
          {t("homePage.liveSessions.zoomBoxTitle")}
        </h3>
        <p className={className.classNameDescription}>
          {t("homePage.liveSessions.zoomBoxDescription")}
        </p>
      </div>
      <div className={className.classNameFeaturesContainer}>
        <div className={className.classNameIcon}>
          <TbBrandZoom className="text-primary-green-heavy" />
        </div>
        <div className="flex flex-col gap-2">
          {zoomPills.map((p, i) => (
            <div key={i} className={className.classNameFeatures}>
              <span className={className.classNameFeatureElement} />
              {curLang === "en" ? p.en : p.ar}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZoomBox;
