import pageCover from "../../assets/images/loginPage_registerPage/pageCover.webp";
import { useSelector } from "react-redux";
import { Logo } from "../../../ui/Icons";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Input from "../../../ui/Input";
import ButtonForm from "../../../ui/ButtonForm";
import ButtonLink from "../../../ui/ButtonLink";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  return (
    <div className={isDark ? "bg-night" : "bg-light"}>
      <Logo
        classNameString={"fixed max-815:inset-s-10 top-8 left-23 z-5555"}
        h={45}
      />
      <div
        dir="ltr"
        className={`${isDark ? "bg-night" : "bg-light"} flex h-dvh animate-[fadeIn_0.5s_ease] items-center justify-between`}
      >
        {/* login side */}
        <div
          dir={curLang === "en" ? "ltr" : "rtl"}
          className="815:w-[50%] flex w-full items-center justify-center"
        >
          <div className="flex w-[50%] flex-col justify-center p-6 shadow-xs">
            <form className="300:w-70 380:w-85 self-center">
              {/* Title & Description */}
              <div className="mb-8">
                <h2 className="text-title -mb-1 text-[2.5rem] font-bold">
                  Welcome back
                </h2>
                <p className="translate-x-0.5 text-lg text-[#777]">
                  Please enter your details
                </p>
              </div>
              {/* Email Input */}
              <Input
                label="Email"
                type="email"
                id={"email"}
                placeholder="your@email.com"
                required={true}
              />
              {/* Password Input */}
              <Input
                label="Password"
                type="password"
                id={"password"}
                required={true}
              />
              {/* Forgot Password */}
              <ButtonLink to="/reset-password" className="text-end underline">
                Forgot password
              </ButtonLink>

              {/* Action Buttons */}
              <div>
                {/* Sign in */}
                <ButtonForm className="bg-primary-green-heavy text-green-50 hover:bg-[#2d7230]">
                  Sign in
                </ButtonForm>

                {/* Sign in with google */}
                <ButtonForm className="text-description border-primary-green-heavy/40 flex items-center justify-center gap-3 border hover:bg-gray-100">
                  <FcGoogle className="text-2xl" />
                  Sign in with Google
                </ButtonForm>

                <p
                  onClick={(e) => e.preventDefault()}
                  className="w-full text-center text-[#777]"
                >
                  Dont have an acoount?{" "}
                  <Link
                    className={`${
                      isDark
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-800"
                    } focus:ring-primary-green-heavy/60 underline outline-none focus:ring-1 focus:ring-offset-1`}
                    to={"/register"}
                  >
                    Sign up
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
          } max-815:hidden flex h-dvh w-[50%] items-center justify-center`}
        >
          <img
            src={pageCover}
            alt="page cover"
            className="h-[80%] object-cover max-lg:h-[70%]"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
