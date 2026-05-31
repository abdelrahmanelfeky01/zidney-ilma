import { useTranslation } from "react-i18next";
import { Logo } from "../../ui/Icons";
import { useSelector } from "react-redux";

function Brand() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t } = useTranslation();

  const className = {
    footerDescription: `mt-3.5 max-w-65 text-[13.5px] leading-[1.8] ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,

    ayah: `mt-3.5 border-r-[3px] pr-3 text-[15px] leading-[1.7] ${
      isDark
        ? "border-primary-yellow text-[#FFE082]"
        : "border-[#FFC107] text-primary-yellow"
    }`,
  };

  return (
    <div>
      <Logo />
      <p className={className.footerDescription}>{t("footer.description")}</p>
      <div className={className.ayah}>{t("footer.ayah")}</div>
    </div>
  );
}

export default Brand;
