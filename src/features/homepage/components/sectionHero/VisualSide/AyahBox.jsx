import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function AyahBox() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t } = useTranslation();
  
  const className = {
    classNameAyahContainer: `mb-4.5 rounded-[14px] border px-4.5 py-5 text-center ${
      isDark
        ? "border-[rgba(76,175,80,0.15)] bg-[rgba(76,175,80,0.12)]"
        : "border-[rgba(76,175,80,0.12)] bg-[#F1F8E9]"
    }`,
    classNameAyah: `mb-2 text-[22px] leading-[1.9] ${isDark ? "text-[#FFE082]" : "text-primary-green-heavy"}`,
    classNameAyahDetails: `text-[11px] ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,
  };

  return (
    <div className={className.ayahContainer}>
      <div className={className.classNameAyah}>{t("homePage.hero.visualSide.ayah")}</div>
      <div className={className.classNameAyahDetails}>
        {t("homePage.hero.visualSide.ayahDetails")}
      </div>
    </div>
  );
}

export default AyahBox;
