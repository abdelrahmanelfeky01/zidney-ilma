import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ButtonSignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const className =
    "hidden cursor-pointer rounded-[10px] border-none bg-primary-green px-4 py-2 font-['Cairo'] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-primary-green-heavy lg:block lg:px-5.5 lg:py-2.25";
  return (
    <button className={className} onClick={() => navigate("/register")}>
      {t("header.buttonSignUp")}
    </button>
  );
}

export default ButtonSignUp;
