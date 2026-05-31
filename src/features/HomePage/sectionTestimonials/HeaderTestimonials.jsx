import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function HeaderTestimonials() {
  const isDark = useSelector((state) => state.general.isDark);

  const { t } = useTranslation();

  const className = {
    subtitle:
      "mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-primary-yellow uppercase",

    subtitleLine: "h-px max-w-10 flex-1 bg-primary-yellow-light opacity-40",

    title: `mb-3.5 text-[clamp(26px,3.5vw,42px)] leading-tight font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,

    description: `mb-12 max-w-150 text-base leading-[1.8] ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,
  };

  return (
    <>
      <div className={className.subtitle}>
        {t("testimonials.subTitle")}
        <span className={className.subtitleLine} />
      </div>
      <h2 className={className.title}>{t("testimonials.title")}</h2>
      <p className={className.description}>{t("testimonials.description")}</p>
    </>
  );
}

export default HeaderTestimonials;
