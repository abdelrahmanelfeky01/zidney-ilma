import { useTranslation } from "react-i18next";
import { testimonialsData } from "../../../../data/TestimonialsData";
import { useSelector } from "react-redux";

function TestimonialsGrid() {
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  const className = {
    container: "grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-4",

    testimonialsContainer: `relative rounded-[20px] border p-7 flex flex-col ${
      isDark ? "border-[#223028] bg-[#172019]" : "border-[#e8e0d0] bg-white"
    }`,

    iconTop:
      "mb-3 text-[48px] leading-[0.7] text-primary-yellow opacity-20 select-none",

    stars: "mb-3.5 text-sm tracking-[3px] text-primary-yellow",

    text: `mb-5 text-[14.5px] leading-[1.8] italic flex-1 ${isDark ? "text-[#a0b8a5]" : "text-[#4a4a4a]"}`,

    image:
      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",

    namePerson: `text-[13px] font-bold ${isDark ? "text-[#f0ede6]" : "text-[#1a1a1a]"}`,

    descriptionPerson: `mt-0.5 text-[11px] ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,
  };

  return (
    <div className={className.container}>
      {testimonialsData.map((t, i) => (
        <div key={i} className={className.testimonialsContainer}>
          <div className={className.iconTop}>"</div>
          <div className={className.stars}>★★★★★</div>
          <p className={className.text}>
            {curLang === "en" ? t.textEn : t.textAr}
          </p>
          <div className="flex items-center gap-3">
            <div
              className={className.image}
              style={{
                backgroundColor: t.bg,
                color: t.darkText ? "#1B1B1B" : "#fff",
              }}
            >
              {t.initials}
            </div>
            <div>
              <div className={className.namePerson}>
                {curLang === "en" ? t.nameEn : t.nameAr}
              </div>
              <div className={className.descriptionPerson}>
                {curLang === "en" ? t.roleEn : t.roleAr}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsGrid;
