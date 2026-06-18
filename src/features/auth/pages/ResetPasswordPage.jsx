import { useSelector } from "react-redux";
import { MdOutlineVpnKey } from "react-icons/md";
import Input from "../components/Input";
import ButtonForm from "../components/ButtonForm";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import { useTranslation } from "react-i18next";
import Logo from "../../../ui/Logo";

function ResetPasswordPage() {
  const { isDark } = useSelector((state) => state.general);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  return (
    <div
      dir={curLang === "en" ? "ltr" : "rtl"}
      className={`${isDark ? "bg-night" : "bg-light"}`}
    >
      <>
        <Logo
          classNameString={"fixed max-815:inset-s-10 top-8 inset-s-23 z-5555"}
          h={45}
        />
        <div
          dir={curLang === "en" ? "ltr" : "rtl"}
          className={`600:w-150 300:px-8 mx-auto flex h-dvh animate-[fadeIn_0.5s_ease] flex-col items-center justify-center`}
        >
          <div className="mb-10">
            <MdOutlineVpnKey className="border-primary-green/10 text-title rounded-xl border p-3.5 text-8xl shadow-md" />
          </div>
          <div className="600:w-[80%] mb-12 text-center">
            <h2 className="text-title 500:text-4xl 380:text-3xl 300:text-2xl mb-6 font-semibold">
              {t("resetPasswordPage.title")}
            </h2>
            <p className="text-description 380:text-xl 300:text-lg">
              {t("resetPasswordPage.description")}
            </p>
          </div>
          <form className="600:w-[80%] 300:w-full">
            <Input
              label={t("resetPasswordPage.emailLabel")}
              type="email"
              id={"email"}
              placeholder={t("resetPasswordPage.emailPlaceholder")}
              required={true}
              classNameInput="w-60 text-lg"
              classNameContainer="mb-6"
              dir={curLang === "en" ? "ltr" : "rtl"}
            />
            <ButtonForm
              type="submit"
              className="bg-primary-green-heavy text-[1.1rem] text-green-50 hover:bg-[#2d7230]"
            >
              {t("resetPasswordPage.resetButton")}
            </ButtonForm>
          </form>

          <ButtonLink
            to="/login"
            className="group bg bg flex items-center gap-2"
          >
            {curLang === "en" ? (
              <FaArrowLeftLong className="hover text-xl transition-all duration-300 group-hover:-translate-x-1" />
            ) : (
              <FaArrowRightLong className="hover text-xl transition-all duration-300 group-hover:-translate-x-1" />
            )}

            <span className="text-md">
              {t("resetPasswordPage.backToLogin")}
            </span>
          </ButtonLink>
        </div>
      </>
    </div>
  );
}

export default ResetPasswordPage;
