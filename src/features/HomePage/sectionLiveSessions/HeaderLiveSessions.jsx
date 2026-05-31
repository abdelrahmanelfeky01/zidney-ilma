import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function HeaderLiveSessions() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t } = useTranslation();

  const className = {
    classNameSubtitle:
      "mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-primary-yellow uppercase",

    classNameSubtitleLine: "h-px max-w-10 flex-1 bg-primary-yellow-light opacity-40",

    classNameTitle: `mb-3.5 text-[clamp(26px,3.5vw,42px)] leading-tight font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,

    classNameDescription: `mb-13 max-w-150 text-base leading-[1.8] ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,
  };

  return (
    <>
      <div className={className.classNameSubtitle}>
        {t("liveSessions.subTitle")}
        <span className={className.classNameSubtitleLine} />
      </div>
      <h2 className={className.classNameTitle}>{t("liveSessions.title")}</h2>
      <p className={className.classNameDescription}>
        {t("liveSessions.description")}
      </p>
    </>
  );
}

export default HeaderLiveSessions;
