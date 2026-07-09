// Eco System
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

// Components
import FormSignUp from "../components/FormSignUp";
import Logo from "../../../ui/Logo";
import pageCover from "../../../assets/images/loginPage_registerPage/pageCover.webp";
import { useSignup } from "../hooks/useSignup";
import ConfirmSignUp from "../components/ConfirmSignUp";
import MiniSpinner from "../../../ui/MiniSpinner";

function RegisterPage() {
  // Local State
  const [showForm, setShowForm] = useState(true);
  const [confirmedEmail, setConfirmedEmail] = useState("");

  // Hook State
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const { isLoading, signup } = useSignup();
  const { register, control, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });

  // Drived State
  const curLang = i18n.language;
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    setConfirmedEmail(email);
    setShowForm(false);

    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
        },
        onError: () => {
          setShowForm(true);
        },
      },
    );
  }

  function onError(errors) {
    console.log(errors);
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
        {/* Register Form */}

        <div
          dir={curLang === "en" ? "ltr" : "rtl"}
          className={`${isDark ? "bg-night" : "bg-light"} 815:w-[50%] 815:pt-20 flex w-full items-center justify-center`}
        >
          <div className="flex w-[50%] flex-col justify-center p-6">
            {isLoading && (
              <div className="flex items-center justify-center">
                <MiniSpinner size="xl" />
              </div>
            )}

            {showForm && !isLoading && (
              <FormSignUp
                onSubmit={onSubmit}
                onError={onError}
                register={register}
                errors={errors}
                control={control}
                handleSubmit={handleSubmit}
              />
            )}

            {!showForm && !isLoading && (
              <div className="flex items-center justify-center">
                <ConfirmSignUp email={confirmedEmail} />
              </div>
            )}
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
