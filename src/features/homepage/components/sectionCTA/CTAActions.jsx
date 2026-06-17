import { useTranslation } from "react-i18next";

function CTAActions() {
  const { t } = useTranslation();

  const className = {
    container: "flex flex-wrap justify-center gap-3.5",

    classNameButtonPrimary:
      "cursor-pointer rounded-[14px] border-none px-9 py-4 font-['Cairo'] text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5",

    stylesButtonPrimary: {
      background: "linear-gradient(135deg, #F9A825, #FFC107)",
      boxShadow: "0 6px 24px rgba(255,193,7,0.4)",
    },

    buttonSecondary:
      "cursor-pointer rounded-[14px] border-[1.5px] border-[rgba(255,255,255,0.4)] bg-transparent px-8 py-4 font-['Cairo'] text-base font-semibold text-white transition-all duration-300 hover:border-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)]",
  };

  return (
    <div className={className.container}>
      <button
        className={className.classNameButtonPrimary}
        style={className.stylesButtonPrimary}
      >
        {t("homePage.CTA.buttonPrimary")}
      </button>
      <button className={className.buttonSecondary}>
        {t("homePage.CTA.buttonSecondary")}
      </button>
    </div>
  );
}

export default CTAActions;
