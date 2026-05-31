import { useTranslation } from "react-i18next";
import { heroVisualPills } from "../../../../data/heroVisualPills";

function CoursePills() {
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  return (
    <div className="mb-4.5 flex flex-wrap gap-1.5">
      {heroVisualPills.map((p, i) => (
        <span
          key={i}
          className={`text-primary-green dark-pill-green rounded-[20px] bg-[rgba(76,175,80,0.2)] px-3 py-1 text-xs font-semibold`}
        >
          {curLang === "en" ? p.nameEn : p.nameAr}
        </span>
      ))}
    </div>
  );
}

export default CoursePills;
