import pageCover from "../../../assets/images/loginPage_registerPage/pageCover.webp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";
import ButtonForm from "../components/ButtonForm";
import { useTranslation } from "react-i18next";
import Logo from "../../../ui/Logo";
import { useForm } from "react-hook-form";
import InputFeedback from "../components/InputFeedback";
import { useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import {
  isLongEnough,
  isValidName,
  hasLettersAndNumbers,
  isValidEmail,
  isValidPassword,
} from "../../../utils/helpers";

function RegisterPage() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  const { register, control, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const inputsValue = useWatch({ control });

  function onSubmit(data) {
    console.log("from Success");
    console.log(data);
    toast.success("success from on Success");
  }

  function onError(error) {
    console.log("from error");
    console.log(error);
    toast.error("Error from on Error");
  }

  return (
    <div
      dir={curLang === "en" ? "ltr" : "rtl"}
      className={`${isDark ? "bg-night" : "bg-light"} flex min-h-svh flex-col`}
    >
      <Logo
        classNameString={
          "815:fixed max-815:inset-s-10 max-815:flex max-815:items-center max-815:pt-10 max-815:ps-10 top-8 lg:inset-s-23 md:inset-s-10 z-5555"
        }
        h={45}
      />
      <div
        className={`${isDark ? "bg-night" : "bg-light"} max-815:mt-4 flex flex-1 animate-[fadeIn_0.5s_ease] items-center justify-between`}
      >
        {/* Register side */}
        <div
          dir={curLang === "en" ? "ltr" : "rtl"}
          className={`${isDark ? "bg-night" : "bg-light"} 815:w-[50%] 815:pt-20 flex w-full items-center justify-center`}
        >
          <div className="flex w-[50%] flex-col justify-center p-6">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit, onError)}
              autoComplete="on"
              className="300:w-70 380:w-85 self-center"
            >
              {/* Title & Description */}
              <div className="mb-8">
                <h2 className="text-title max-380:text-[1.5rem] mb-1 text-[1.75rem] font-bold">
                  {t("registerPage.title")}
                </h2>
                <p className="translate-x-0.5 text-lg text-[#777]">
                  {t("registerPage.description")}
                </p>
              </div>

              {/* Inputs */}
              <div className="mb-10 flex flex-col gap-5">
                {/* Name Input */}
                <div>
                  <Input
                    {...register("fullName", {
                      required: "Please enter your full name",
                      validate: (value) => isValidName(value),
                    })}
                    isError={Boolean(errors?.fullName?.message)}
                    label={t("registerPage.fullNameLabel")}
                    type="text"
                    dir={curLang === "en" ? "ltr" : "rtl"}
                    id={"fullName"}
                    mb={false}
                    classNameContainer="mb-2"
                  />
                  {/* Warn Area */}
                  <div>
                    {/* when Empty */}
                    <div className="flex items-center gap-2">
                      <InputFeedback
                        type="error"
                        message={errors?.fullName?.message}
                      />

                      {/* Validation */}

                      {!errors?.fullName?.message && inputsValue.fullName && (
                        <div>
                          <InputFeedback
                            type={
                              isValidName(inputsValue?.fullName)
                                ? "success"
                                : "warn"
                            }
                            message={
                              "Enter your full name (first and last name)"
                            }
                          />
                        </div>
                      )}
                    </div>
                    {/* ---------- */}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <Input
                    {...register("email", {
                      required: "Please enter your email",
                      validate: (value) => isValidEmail(value),
                    })}
                    isError={Boolean(errors?.email?.message)}
                    label={t("registerPage.emailLabel")}
                    type="email"
                    id={"email"}
                    mb={false}
                    dir={curLang === "en" ? "ltr" : "rtl"}
                    placeholder={t("registerPage.emailPlaceholder")}
                    classNameContainer="mb-2"
                  />
                  {/* Warn Area */}
                  <div>
                    {/* when Empty */}
                    <div className="text-error flex items-center gap-2">
                      <InputFeedback
                        type="error"
                        message={errors?.email?.message}
                      />
                    </div>

                    {!errors?.email?.message && inputsValue.email && (
                      <div>
                        <InputFeedback
                          type={
                            isValidEmail(inputsValue?.email)
                              ? "success"
                              : "warn"
                          }
                          message="Enter a valid email address."
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* Password Input */}
                <div>
                  <Input
                    {...register("password", {
                      required: "Please enter your password",
                      validate: (value) => isValidPassword(value),
                    })}
                    isError={Boolean(errors?.password?.message)}
                    label={t("registerPage.passwordLabel")}
                    mb={false}
                    classNameContainer="mb-2"
                    type="password"
                    id={"password"}
                    dir={curLang === "en" ? "ltr" : "rtl"}
                  />
                  <div>
                    {/* when Empty */}
                    <div className="text-error flex items-center gap-2">
                      <InputFeedback
                        type="error"
                        message={errors?.password?.message}
                      />
                    </div>
                    {/* ---------- */}

                    {!errors?.password?.message && inputsValue.password && (
                      <div className="text-warn">
                        <InputFeedback
                          type={
                            isLongEnough(inputsValue?.password)
                              ? "success"
                              : "warn"
                          }
                          message="Must be at least 8 characters."
                        />
                        <InputFeedback
                          type={
                            hasLettersAndNumbers(inputsValue?.password)
                              ? "success"
                              : "warn"
                          }
                          message="Must contain both letters and numbers."
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* Repeat Password Input */}
                <div>
                  <Input
                    {...register("repeatPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === inputsValue.password,
                    })}
                    isError={Boolean(errors?.repeatPassword?.message)}
                    label={t("registerPage.repeatPasswordLabel")}
                    type="password"
                    id={"repeatPassword"}
                    dir={curLang === "en" ? "ltr" : "rtl"}
                    mb={false}
                    classNameContainer="mb-2"
                  />
                  <div>
                    {/* when Empty */}
                    <div className="text-error flex items-center gap-2">
                      <InputFeedback
                        message={errors?.repeatPassword?.message}
                      />
                    </div>
                    {/* ---------- */}

                    {!errors?.repeatPassword?.message &&
                      inputsValue.repeatPassword && (
                        <div className="text-warn">
                          <InputFeedback
                            type={
                              inputsValue.password &&
                              inputsValue.password ===
                                inputsValue.repeatPassword
                                ? "success"
                                : "warn"
                            }
                            message={"Passwords must match."}
                          />
                        </div>
                      )}
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div>
                {/* Sign in */}
                <ButtonForm className="bg-primary-green-heavy mb-8 text-green-50 hover:bg-[#2d7230]">
                  {t("registerPage.signUpButton")}
                </ButtonForm>

                {/* Sign in with google */}
                <ButtonForm
                  className={`${isDark ? "hover:bg-white/5" : "hover:bg-gray-100"} text-description border-primary-green-heavy/40 flex items-center justify-center gap-3 border`}
                >
                  <FcGoogle className="text-2xl" />
                  {t("registerPage.googleButton")}
                </ButtonForm>

                <p
                  onClick={(e) => e.preventDefault()}
                  className="w-full text-center text-[#777]"
                >
                  {t("registerPage.haveAccount")}{" "}
                  <Link
                    className={`${
                      isDark
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-800"
                    } focus:ring-primary-green-heavy/60 underline outline-none focus:ring-1 focus:ring-offset-1`}
                    to={"/login"}
                  >
                    {t("registerPage.signInLink")}
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

export default RegisterPage;
