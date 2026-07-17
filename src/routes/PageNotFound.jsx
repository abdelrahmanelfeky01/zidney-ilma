import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { FiHome } from "react-icons/fi";

function PageNotFound() {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameSection: `relative flex h-screen w-full items-center justify-center overflow-hidden px-4 py-14 sm:px-6 lg:px-10 ${
      isDark ? "bg-night" : "bg-light"
    }`,

    classNameGlow: "pointer-events-none absolute inset-0",
    stylesGlow: {
      background:
        "radial-gradient(ellipse at 20% 30%, rgba(76,175,80,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(249,168,37,0.12) 0%, transparent 55%)",
    },

    classNameContainer:
      "relative z-10 mx-auto flex w-full max-w-130 flex-col items-center text-center",

    classNameNumber:
      "mb-3 bg-linear-to-r from-primary-green to-primary-yellow bg-clip-text text-[clamp(64px,18vw,150px)] leading-none font-extrabold text-transparent sm:mb-4",

    classNameTitle: `mb-3 px-2 text-[clamp(19px,4.5vw,32px)] leading-snug font-bold sm:mb-4 sm:px-0 ${
      isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"
    }`,

    classNameDescription: `mb-8 px-2 text-sm leading-[1.85] sm:mb-10 sm:px-0 sm:text-base ${
      isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"
    }`,

    classNamePrimaryButton:
      "inline-flex w-full max-w-70 cursor-pointer items-center justify-center gap-2 rounded-xl border-none px-7.5 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto",
    stylesPrimaryButton: {
      background: "linear-gradient(135deg, #4CAF50, #388E3C)",
      boxShadow: "0 4px 16px rgba(76,175,80,0.35)",
    },
  };

  return (
    <section className={className.classNameSection}>
      <div className={className.classNameGlow} style={className.stylesGlow} />

      <div className={className.classNameContainer} data-aos="fade-up">
        <h1 className={className.classNameNumber}>404</h1>

        <h2 className={className.classNameTitle}>{t("notFoundPage.title")}</h2>

        <p className={className.classNameDescription}>
          {t("notFoundPage.description")}
        </p>

        <Link
          to="/"
          className={className.classNamePrimaryButton}
          style={className.stylesPrimaryButton}
        >
          <FiHome />
          {t("notFoundPage.homeButton")}
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
