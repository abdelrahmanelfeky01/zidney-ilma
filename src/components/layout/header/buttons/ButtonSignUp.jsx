import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ButtonSignUp({ className = "", position = "nav" }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const classNameNav =
    "hidden cursor-pointer rounded-[10px] border-none bg-primary-green px-4 py-2 font-['Cairo'] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-primary-green-heavy lg:block lg:px-5.5 lg:py-2.25";

  const classNameHamburger =
    "bg-primary-green cursor-pointer rounded-[10px] border-none px-5.5 py-2.25 font-['Cairo'] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#388E3C]";

  return (
    <button
      className={`${position === "nav" ? classNameNav : classNameHamburger} ${className}`}
      onClick={() => navigate("/register")}
    >
      {t("homePage.header.buttonSignUp")}
    </button>
  );
}

export default ButtonSignUp;
