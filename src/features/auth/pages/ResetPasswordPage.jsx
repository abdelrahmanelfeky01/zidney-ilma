import { useSelector } from "react-redux";
import {
  MdOutlineVpnKey,
  MdOutlineMarkEmailRead,
  MdLockOutline,
} from "react-icons/md";
import Input from "../components/Input";
import InputFeedback from "../components/InputFeedback";
import ButtonForm from "../components/ButtonForm";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import { useTranslation } from "react-i18next";
import Logo from "../../../ui/Logo";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import { useResetPassword } from "../hooks/useResetPassword";
import { useResendResetPassword } from "../hooks/useResendResetPassword";
import useVerifyResetPasswordOtp from "../hooks/useVerifyResetPasswordOtp";
import useUpdatePassword from "../hooks/useUpdatePassword";
import MiniSpinner from "../../../ui/MiniSpinner";
import Spinner from "../../../ui/Spinner";
import {
  isLongEnough,
  hasLettersAndNumbers,
  isValidPassword,
} from "../../../utils/helpers";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const { isDark } = useSelector((state) => state.general);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  // ---- Step 1: send OTP to email ----
  const { resetPassword, isLoading: isSendingEmail } = useResetPassword();

  // ---- Step 2: verify OTP ----
  const {
    verifyResetPasswordOtp,
    isLoading: isVerifyingOtp,
    isError: isOtpError,
  } = useVerifyResetPasswordOtp();

  // ---- Step 2b: resend OTP (نفس الـ endpoint بتاع الإرسال الأول، هوك منفصل بتوست مختلف) ----
  const { resendResetPassword, isLoading: isResending } =
    useResendResetPassword();

  // ---- Step 3: set new password ----
  const { updatePassword, isLoading: isUpdatingPassword } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const inputsValue = useWatch({ control });

  // الـ spinner الكامل بيغطي فقط الخطوات اللي مفيش فيها تفاعل تاني ممكن يحصل
  // أثناء التحميل (إرسال الإيميل الأول، تحديث الباسورد). أما إعادة الإرسال
  // فبتظهر بمؤشر صغير جنب رابط "Click to resend" نفسه عشان المستخدم يفضل
  // شايف الـ OTP input ومايتفاجئش إن الشاشة اختفت.
  const isProcessing = isSendingEmail || isVerifyingOtp || isUpdatingPassword;

  function handleSendResetEmail() {
    if (!email) return;

    resetPassword(email, {
      onSuccess: () => setStep(2),
    });
  }

  function handleVerifyOtp() {
    if (!otp) return;

    verifyResetPasswordOtp(
      { email, token: otp },
      {
        onSuccess: () => setStep(3),
      },
    );
  }

  function handleResendOtp() {
    if (isResending || !email) return;
    resendResetPassword(email);
  }

  // يستدعى من onKeyDown على مستوى الـ form. بيمنع أي submit افتراضي
  // للمتصفح قبل ما يتولد أصلاً، وينفذ نفس اللي onClick بينفذه بالظبط.
  function handleEnterKey(handler) {
    return (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        handler();
      }
    };
  }

  function onSubmitNewPassword(data) {
    if (data.password !== data.repeatPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    updatePassword(data.password, {
      onSuccess: () => navigate("/login"),
    });
  }

  return (
    <div
      dir={curLang === "en" ? "ltr" : "rtl"}
      className={`${isDark ? "bg-night" : "bg-light"}`}
    >
      {isProcessing && <Spinner />}

      <>
        <Logo
          classNameString={"fixed max-815:inset-s-10 top-8 inset-s-23 z-5555"}
          h={45}
        />

        {/* Step 1 -> send email to backend */}
        {step === 1 && (
          <div
            dir={curLang === "en" ? "ltr" : "rtl"}
            className={`600:w-150 300:px-8 mx-auto flex h-dvh animate-[fadeIn_0.5s_ease] flex-col items-center justify-center`}
          >
            <div className="mb-10">
              <MdOutlineVpnKey className="border-primary-green/10 text-title rounded-xl border p-3.5 text-8xl shadow-md" />
            </div>
            <div className="600:w-[80%] mb-12 text-center">
              <h2 className="text-title 500:text-4xl 380:text-3xl 300:text-2xl mb-6 font-semibold">
                Forgot password?
              </h2>
              <p className="text-description 380:text-xl 300:text-lg">
                No worries, we'll send you reset instructions.
              </p>
            </div>
            <form
              autoComplete="on"
              onKeyDown={handleEnterKey(handleSendResetEmail)}
              className="600:w-[80%] 300:w-full"
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                id={"email"}
                placeholder="Enter your email"
                required={true}
                classNameInput="w-60 text-lg"
                classNameContainer="mb-6"
                dir={curLang === "en" ? "ltr" : "rtl"}
              />
              <ButtonForm
                onClick={(e) => {
                  e.preventDefault();
                  handleSendResetEmail();
                }}
                disabled={isSendingEmail}
                type="button"
                className="bg-primary-green-heavy text-[1.1rem] text-green-50 hover:bg-[#2d7230]"
              >
                {isSendingEmail ? <MiniSpinner /> : "Reset password"}
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
              <span className="text-md">Back to log in</span>
            </ButtonLink>
          </div>
        )}

        {/* Step 2 -> verify otp */}
        {step === 2 && (
          <div
            dir={curLang === "en" ? "ltr" : "rtl"}
            className={`600:w-150 300:px-8 mx-auto flex h-dvh animate-[fadeIn_0.5s_ease] flex-col items-center justify-center`}
          >
            <div className="mb-10">
              <MdOutlineMarkEmailRead className="border-primary-green/10 text-title rounded-xl border p-3.5 text-8xl shadow-md" />
            </div>
            <div className="600:w-[80%] mb-8 text-center">
              <h2 className="text-title 500:text-4xl 380:text-3xl 300:text-2xl mb-6 font-semibold">
                Password reset
              </h2>
              <p className="text-description 380:text-xl 300:text-lg">
                If you have a registered account, a code will be sent to you;
                enter it here.
              </p>
            </div>

            <form
              autoComplete="on"
              onKeyDown={handleEnterKey(handleVerifyOtp)}
              className="600:w-[80%] 300:w-full"
            >
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                isLabel={false}
                maxLength="6"
                label="Enter OTP"
                classNameInput="text-2xl font-semibold text-title tracking-[10px] focus:ring-2 focus:ring-offset-3 -me-[10px] text-center border-dashed border-3"
                classNameContainer="mb-2"
                dir={curLang === "en" ? "ltr" : "rtl"}
              />

              {isOtpError && (
                <div className="mb-4">
                  <InputFeedback
                    type="error"
                    message="The OTP you entered is incorrect. Please try again."
                  />
                </div>
              )}

              <ButtonForm
                onClick={(e) => {
                  e.preventDefault();
                  handleVerifyOtp();
                }}
                disabled={isVerifyingOtp}
                type="button"
                className="bg-primary-green-heavy mb-6 text-[1.1rem] text-green-50 hover:bg-[#2d7230]"
              >
                {isVerifyingOtp ? <MiniSpinner /> : "Continue"}
              </ButtonForm>
            </form>

            <p className="text-description mb-8 text-center">
              Didn't receive the email?{" "}
              {isResending ? (
                <span className="text-primary-green-heavy inline-flex items-center gap-1 font-semibold">
                  <MiniSpinner />
                </span>
              ) : (
                <span
                  onClick={handleResendOtp}
                  className="text-primary-green-heavy cursor-pointer font-semibold hover:underline"
                >
                  Click to resend
                </span>
              )}
            </p>

            <ButtonLink
              to="/login"
              className="group bg bg flex items-center gap-2"
            >
              {curLang === "en" ? (
                <FaArrowLeftLong className="hover text-xl transition-all duration-300 group-hover:-translate-x-1" />
              ) : (
                <FaArrowRightLong className="hover text-xl transition-all duration-300 group-hover:-translate-x-1" />
              )}
              <span className="text-md">Back to log in</span>
            </ButtonLink>
          </div>
        )}

        {/* Step 3 -> set new password */}
        {step === 3 && (
          <div
            dir={curLang === "en" ? "ltr" : "rtl"}
            className={`600:w-150 300:px-8 mx-auto flex h-dvh animate-[fadeIn_0.5s_ease] flex-col items-center justify-center`}
          >
            <div className="mb-10">
              <MdLockOutline className="border-primary-green/10 text-title rounded-xl border p-3.5 text-8xl shadow-md" />
            </div>
            <div className="600:w-[80%] mb-10 text-center">
              <h2 className="text-title 500:text-4xl 380:text-3xl 300:text-2xl mb-6 font-semibold">
                Set new password
              </h2>
              <p className="text-description 380:text-xl 300:text-lg">
                Must be at least 8 characters.
              </p>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit(onSubmitNewPassword)}
              autoComplete="on"
              className="600:w-[80%] 300:w-full"
            >
              <div className="mb-5">
                <Input
                  {...register("password", {
                    required: "Please enter your password",
                    validate: (value) => isValidPassword(value),
                  })}
                  isError={Boolean(errors?.password?.message)}
                  label="Password"
                  mb={false}
                  classNameContainer="mb-2"
                  type="password"
                  id={"newPassword"}
                  dir={curLang === "en" ? "ltr" : "rtl"}
                />
                <div>
                  <div className="text-error flex items-center gap-2">
                    <InputFeedback
                      type="error"
                      message={errors?.password?.message}
                    />
                  </div>

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

              <div className="mb-8">
                <Input
                  {...register("repeatPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === inputsValue.password ||
                      "Passwords do not match.",
                  })}
                  isError={Boolean(errors?.repeatPassword?.message)}
                  label="Confirm password"
                  type="password"
                  id={"confirmNewPassword"}
                  dir={curLang === "en" ? "ltr" : "rtl"}
                  mb={false}
                  classNameContainer="mb-2"
                />
                <div>
                  <div className="text-error flex items-center gap-2">
                    <InputFeedback message={errors?.repeatPassword?.message} />
                  </div>

                  {!errors?.repeatPassword?.message &&
                    inputsValue.repeatPassword && (
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

              <ButtonForm
                disabled={isUpdatingPassword}
                type="submit"
                className="bg-primary-green-heavy text-[1.1rem] text-green-50 hover:bg-[#2d7230]"
              >
                {isUpdatingPassword ? <MiniSpinner /> : "Reset password"}
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
              <span className="text-md">Back to log in</span>
            </ButtonLink>
          </div>
        )}
      </>
    </div>
  );
}

export default ResetPasswordPage;
