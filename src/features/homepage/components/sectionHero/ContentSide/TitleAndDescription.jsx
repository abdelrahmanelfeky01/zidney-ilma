import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function TitleAndDescription() {
  const { t } = useTranslation();

  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameTitle: `mb-4.5 text-[clamp(36px,4.5vw,58px)] leading-[1.1] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"} leading-normal`,

    classNameDescription: `mb-9 max-w-125 text-base leading-[1.85] ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,
  };

  return (
    <>
      {/* Title */}
      <h1 className={className.classNameTitle}>
        <>
          <span className="text-primary-green">
            {t("homePage.hero.contentSide.titleSlice1")}{" "}
          </span>

          <span>{t("homePage.hero.contentSide.titleSlice2")}</span>
          <span className={isDark ? "text-[#FFE082]" : "text-[#F9A825]"}>
            {t("homePage.hero.contentSide.titleSlice3")}
          </span>
        </>
      </h1>
      {/* Description */}
      <p className={className.classNameDescription}>
        {t("homePage.hero.contentSide.description")}
      </p>
    </>
  );
}

export default TitleAndDescription;
