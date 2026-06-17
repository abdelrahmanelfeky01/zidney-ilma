import { useTranslation } from "react-i18next";

function CTAContent() {
  const { t } = useTranslation();

  const className = {
    ayah: "mb-4 text-[20px] tracking-[8px] text-[rgba(255,193,7,0.4)]",

    title:
      "mb-3.5 text-[clamp(22px,3.5vw,44px)] leading-[1.35] font-bold text-white",

    description: "mb-9 text-base text-[rgba(255,255,255,0.7)]",
  };

  return (
    <>
      <div className={className.ayah}>﴾ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴿</div>
      <h2 className={className.title}>{t("homePage.CTA.title")}</h2>
      <p className={className.description}>{t("homePage.CTA.description")}</p>
    </>
  );
}

export default CTAContent;
