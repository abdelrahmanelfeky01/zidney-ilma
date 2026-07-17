import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../auth/hooks/useUser";
import { toggleShowLoginModal } from "../../../../store/generalSlice";

function ButtonAllCourses() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  const className = `cursor-pointer rounded-xl bg-transparent px-6.5 py-3.5 font-['Cairo'] text-xl font-semibold transition-all duration-300 hover:bg-primary-green hover:text-white ${
    isDark
      ? "border-[1.5px] border-primary-green text-primary-green hover:border-primary-green hover:bg-primary-green"
      : "border-[1.5px] border-primary-green text-primary-green"
  }`;

  function handleClick(e) {
    e.preventDefault();

    if (!isAuthenticated && !isLoading) {
      dispatch(toggleShowLoginModal());
    } else {
      navigate("/courses");
    }
    return;
  }

  return (
    <div className="flex items-center justify-center">
      <a onClick={handleClick} className={className}>
        {t("homePage.freeCourses.allCoursesButton")}
      </a>
    </div>
  );
}

export default ButtonAllCourses;
