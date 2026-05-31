import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function CoursesSearch() {
  const { t } = useTranslation();
  const isDark = useSelector((state) => state.general.isDark);
  
  const className = {
    container:
      "relative z-10 mx-auto -mt-6 max-w-225 px-8 transition-transform duration-300 focus-within:-translate-y-2",
    subContainer:
      "flex items-center gap-3 rounded-[28px] border border-[#ede8e0] bg-white px-6 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)]",
    input:
      "flex-1 bg-transparent py-2.5 text-[15px] font-medium text-[#1a1f2e] outline-none placeholder:font-normal placeholder:text-[#8a93a6]",
    searchButton:
      "shrink-0 rounded-[20px] px-7 py-3 text-sm font-bold text-white transition-all duration-250 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(56,142,60,0.4)] cursor-pointer",
  };

  return (
    <div className={className.container}>
      <div className={className.subContainer}>
        <span className="shrink-0 text-lg text-[#8a93a6]">🔍</span>

        <input
          type="text"
          placeholder={t("coursesPage.placeholderSearchInput")}
          className={className.input}
        />

        <button
          className={className.searchButton}
          style={{ background: "linear-gradient(135deg, #388e3c, #4caf50)" }}
        >
          {t("coursesPage.searchButton")}
        </button>
      </div>
    </div>
  );
}

export default CoursesSearch;
