import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function HeroButtons() {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNamePrimaryButton:
      "inline-flex cursor-pointer items-center gap-2 rounded-xl border-none px-7.5 py-3.5 font-['Cairo'] text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5",

    stylesPrimaryButton: {
      background: "linear-gradient(135deg, #F9A825, #FFC107)",
      boxShadow: "0 4px 16px rgba(255,193,7,0.35)",
    },

    classNameSecondaryButton: `cursor-pointer rounded-xl bg-transparent px-6.5 py-3.5 font-['Cairo'] text-[15px] font-semibold transition-all duration-300 hover:bg-primary-green hover:text-white ${
      isDark
        ? "border-[1.5px] border-[#FFC107] text-[#FFE082] hover:border-[#F9A825] hover:bg-[#F9A825]"
        : "border-[1.5px] border-primary-green text-primary-green"
    }`,
  };

  return (
    <div className="mb-12 flex flex-wrap items-center gap-3">
      <button
        className={className.classNamePrimaryButton}
        style={className.stylesPrimaryButton}
      >
        {t("homePage.hero.contentSide.primaryButton")}
      </button>
      <button className={className.classNameSecondaryButton}>
        {t("homePage.hero.contentSide.secondaryButton")}
      </button>
    </div>
  );
}

export default HeroButtons;
