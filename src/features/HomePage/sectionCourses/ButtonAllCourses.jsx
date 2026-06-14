import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ButtonAllCourses() {
  const isDark = useSelector((state) => state.general.isDark);

  const { t } = useTranslation();

  const className = `cursor-pointer rounded-xl bg-transparent px-6.5 py-3.5 font-['Cairo'] text-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 inline-block ${
    isDark
      ? "border-[1.5px] border-[#FFC107] text-[#FFE082] hover:border-[#F9A825] hover:bg-[#F9A825] hover:text-white"
      : "border-[1.5px] border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
  }`;

  return (
    <div className="flex items-center justify-center">
      <Link to="/courses" className={className}>
        {t("homePage.freeCourses.allCoursesButton")}
      </Link>
    </div>
  );
}

export default ButtonAllCourses;
