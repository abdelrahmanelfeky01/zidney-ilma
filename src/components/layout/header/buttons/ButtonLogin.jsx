import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ButtonLogin({ className = "", position = "nav" }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const classNameNav =
    "hidden cursor-pointer rounded-[10px] ring-2 ring-inset ring-primary-green bg-transparent px-4 py-2 font-['Cairo'] text-sm font-semibold text-primary-green transition-all duration-200 hover:bg-primary-green hover:text-white lg:block lg:px-5.5 lg:py-2.25";

  const classNameHamburger =
    "ring-primary-green text-primary-green hover:bg-primary-green cursor-pointer rounded-[10px] bg-transparent px-5.5 py-2.25 font-['Cairo'] text-sm font-semibold ring-2 transition-all duration-200 ring-inset hover:text-white md:block lg:px-5.5 lg:py-2.25";

  return (
    <button
      className={`${position === "nav" ? classNameNav : classNameHamburger} ${className}`}
      onClick={() => navigate("/login")}
    >
      {t("homePage.header.buttonLogin")}
    </button>
  );
}

export default ButtonLogin;
