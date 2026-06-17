import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ButtonSignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const className =
    "hidden cursor-pointer rounded-[10px] ring-2 ring-inset ring-primary-green bg-transparent px-4 py-2 font-['Cairo'] text-sm font-semibold text-primary-green transition-all duration-200 hover:bg-primary-green hover:text-white lg:block lg:px-5.5 lg:py-2.25";

  return (
    <button className={className} onClick={() => navigate("/login")}>
      {t("homePage.header.buttonLogin")}
    </button>
  );
}

export default ButtonSignIn;
