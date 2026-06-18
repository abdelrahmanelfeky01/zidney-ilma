import pageCover from "../../../assets/images/loginPage_registerPage/pageCover.webp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";
import ButtonForm from "../components/ButtonForm";
import ButtonLink from "../components/ButtonLink";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLogin } from "../../auth/hooks/useLogin";
import Logo from "../../../ui/Logo";

function LoginPage() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div
      dir={curLang === "en" ? "ltr" : "rtl"}
      className={`${isDark ? "bg-night" : "bg-light"} flex min-h-svh flex-col`}
    >
      <Logo
        classNameString={"fixed max-815:inset-s-10 top-8 inset-s-23 z-5555"}
        h={45}
      />
      <div
        className={`${isDark ? "bg-night" : "bg-light"} flex flex-1 animate-[fadeIn_0.5s_ease] items-center justify-between`}
      >
        {/* login side */}
        <div className="815:w-[50%] flex w-full items-center justify-center">
          <div className="flex w-[50%] flex-col justify-center p-6">
            <form
              onSubmit={handleSubmit}
              className="300:w-70 380:w-85 self-center"
            >
              {/* Title & Description */}
              <div className="mb-8">
                <h2 className="text-title -mb-1 text-[2.5rem] font-bold">
                  {t("loginPage.title")}
                </h2>
                <p className="translate-x-0.5 text-lg text-[#777]">
                  {t("loginPage.description")}
                </p>
              </div>
              {/* Email Input */}
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
                dir={curLang === "en" ? "ltr" : "rtl"}
                label={t("loginPage.emailLabel")}
                type="email"
                id={"email"}
                placeholder={t("loginPage.emailPlaceholder")}
                required={true}
              />
              {/* Password Input */}
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
                dir={curLang === "en" ? "ltr" : "rtl"}
                label={t("loginPage.passwordLabel")}
                type="password"
                id={"password"}
                required={true}
              />
              {/* Forgot Password */}
              <ButtonLink to="/reset-password" className="text-end underline">
                {t("loginPage.forgotPassword")}
              </ButtonLink>

              {/* Action Buttons */}
              <div>
                {/* Sign in */}
                <ButtonForm
                  disabled={isLoading}
                  className="bg-primary-green-heavy text-green-50 hover:bg-[#2d7230]"
                >
                  {t("loginPage.signInButton")}
                </ButtonForm>

                {/* Sign in with google */}
                <ButtonForm
                  disabled={isLoading}
                  className={`${isDark ? "hover:bg-white/5" : "hover:bg-gray-100"} text-description border-primary-green-heavy/40 flex items-center justify-center gap-3 border`}
                >
                  <FcGoogle className="text-2xl" />
                  {t("loginPage.googleButton")}
                </ButtonForm>

                <p
                  onClick={(e) => e.preventDefault()}
                  className="w-full text-center text-[#777]"
                >
                  {t("loginPage.dontHaveAccount")}{" "}
                  <Link
                    className={`${
                      isDark
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-800"
                    } focus:ring-primary-green-heavy/60 underline outline-none focus:ring-1 focus:ring-offset-1`}
                    to={"/register"}
                  >
                    {t("loginPage.signUpLink")}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* image side */}

        <div
          className={`${
            isDark
              ? "bg-[linear-gradient(160deg,rgb(20,75,30)_0%,rgb(35,105,45)_60%,rgb(48,125,55)_100%)]"
              : "bg-[linear-gradient(160deg,rgb(46,125,50)_0%,rgb(76,175,80)_60%,rgb(102,187,106)_100%)]"
          } max-815:hidden flex w-[50%] items-center justify-center self-stretch`}
        >
          <img
            src={pageCover}
            alt="page cover"
            className="815:h-[60%] object-cover xl:h-[80%]"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
