import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function ButtonToggleLanguage({ handleToggleLanguage }) {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);

  const className = `hidden h-9.5 min-w-9.5 cursor-pointer items-center justify-center rounded-[10px] border font-['Cairo'] text-sm font-semibold transition-all duration-200 lg:flex ${
    isDark
      ? "border-[#223028] bg-[#172019] text-[#a0b8a5] hover:border-primary-yellow-light hover:text-primary-yellow"
      : "border-[#e8e0d0] bg-white text-[#4a4a4a] hover:border-primary-yellow-light hover:text-primary-yellow"
  }`;

  return (
    <button onClick={handleToggleLanguage} className={className}>
      {t("homePage.header.buttonToggleLanguage")}
    </button>
  );
}

export default ButtonToggleLanguage;
