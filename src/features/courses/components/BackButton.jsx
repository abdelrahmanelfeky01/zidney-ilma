import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function BackButton() {
  const { t } = useTranslation();

  const className =
    "group absolute top-4 inset-s-4 380:top-6 380:inset-s-8 z-10 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 rtl:hover:translate-x-1 hover:border-white/50 hover:bg-white/25";

  return (
    <Link to={"/"} className={className}>
      <span className="rotate-180 text-sm leading-none transition-transform duration-300 group-hover:-translate-x-1 sm:text-base rtl:rotate-0 rtl:group-hover:translate-x-1">
        ➜
      </span>
      <span>{t("coursesPage.backButton")}</span>
    </Link>
  );
}

export default BackButton;
