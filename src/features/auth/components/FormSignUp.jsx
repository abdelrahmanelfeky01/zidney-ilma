// Ecosystem
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useWatch } from "react-hook-form";

// Components
import Input from "./Input";
import InputFeedback from "./InputFeedback";
import ButtonForm from "./ButtonForm";
import MiniSpinner from "../../../ui/MiniSpinner";

// Helper Functions
import {
  isLongEnough,
  isValidName,
  hasLettersAndNumbers,
  isValidEmail,
  isValidPassword,
} from "../../../utils/helpers";

import { useGoogleSignInButton } from "../hooks/useGoogleSignInButton";
import { FcGoogle } from "react-icons/fc";

function FormSignUp({
  onSubmit,
  onError,
  register,
  errors,
  control,
  handleSubmit,
}) {
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;
  const isDark = useSelector((state) => state.general.isDark);
  const inputsValue = useWatch({ control });
  const { buttonRef: googleButtonRef, isLoading: isLoginWithGoogle } =
    useGoogleSignInButton();

  return (
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
              <InputFeedback type="error" message={errors?.fullName?.message} />

              {/* Validation */}

              {!errors?.fullName?.message && inputsValue.fullName && (
                <div>
                  <InputFeedback
                    type={
                      isValidName(inputsValue?.fullName) ? "success" : "warn"
                    }
                    message={"Enter your full name (first and last name)"}
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
              <InputFeedback type="error" message={errors?.email?.message} />
            </div>

            {!errors?.email?.message && inputsValue.email && (
              <div>
                <InputFeedback
                  type={isValidEmail(inputsValue?.email) ? "success" : "warn"}
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
              <InputFeedback type="error" message={errors?.password?.message} />
            </div>
            {/* ---------- */}

            {!errors?.password?.message && inputsValue.password && (
              <div className="text-warn">
                <InputFeedback
                  type={
                    isLongEnough(inputsValue?.password) ? "success" : "warn"
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
              <InputFeedback message={errors?.repeatPassword?.message} />
            </div>
            {/* ---------- */}

            {!errors?.repeatPassword?.message && inputsValue.repeatPassword && (
              <div className="text-warn">
                <InputFeedback
                  type={
                    inputsValue.password &&
                    inputsValue.password === inputsValue.repeatPassword
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

        {/* Sign                {/* Sign in with google */}
        <div className="mt-3 mb-6 flex flex-col items-center gap-2">
          <div className="300:w-70 380:w-85 relative overflow-hidden">
            <ButtonForm
              disabled={isLoginWithGoogle}
              className={`${isDark ? "hover:bg-white/5" : "hover:bg-gray-100"} text-description border-primary-green-heavy/40 flex cursor-pointer items-center justify-center gap-3 border`}
            >
              <FcGoogle className="text-2xl" />
              {t("loginPage.googleButton")}
            </ButtonForm>

            <div
              ref={googleButtonRef}
              className="380:translate-y-1 380:scale-108 max-380:scale-95 max-380:translate-y-0.5 max-380:-translate-x-7 absolute inset-0 opacity-0"
            />
          </div>

          {isLoginWithGoogle && <MiniSpinner />}
        </div>

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
  );
}

export default FormSignUp;
