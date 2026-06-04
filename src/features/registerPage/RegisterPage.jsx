import pageCover from "../../assets/images/loginPage_registerPage/pageCover.webp";
import { useSelector } from "react-redux";
import { Logo } from "../../ui/Icons";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Input from "../../ui/Input";
import ButtonForm from "../../ui/ButtonForm";

function RegisterPage() {
  const isDark = useSelector((state) => state.general.isDark);

  return (
    <>
      <Logo classNameString={"fixed top-8 left-23 z-5555"} h={45} />
      <div
        dir="ltr"
        className={`${isDark ? "bg-night" : "bg-light"} flex h-dvh animate-[fadeIn_0.5s_ease] items-center justify-between`}
      >
        {/* login side */}
        <div className="flex w-[50%] items-center justify-center">
          <div className="flex w-[50%] flex-col justify-center p-6 shadow-xs">
            <form className="w-85 self-center">
              {/* Title & Description */}
              <div className="mb-8">
                <h2 className="text-title mb-1 text-3xl font-bold">
                  Sign up to Zidney ilma
                </h2>
                <p className="translate-x-0.5 text-lg text-[#777]">
                  Start your journy
                </p>
              </div>

              {/* Name Input */}
              <Input
                label="Full Name"
                type="text"
                id={"fullName"}
                required={true}
              />

              {/* Email Input */}
              <Input
                label="Email"
                type="email"
                id={"email"}
                placeholder="example@email.com"
                required={true}
              />
              {/* Password Input */}
              <Input
                label="Password"
                type="password"
                id={"password"}
                required={true}
              />

              {/* Repeat Password Input */}
              <Input
                label="Repeat Password"
                type="password"
                id={"repeatPassword"}
                required={true}
                classNameContainer="mb-8"
              />

              {/* Action Buttons */}
              <div>
                {/* Sign in */}
                <ButtonForm className="bg-primary-green-heavy text-green-50 hover:bg-[#2d7230] mb-14">
                  Sign up
                </ButtonForm>

                {/* Sign in with google */}
                <ButtonForm className="text-description border-primary-green-heavy/40 flex items-center justify-center gap-3 border hover:bg-gray-100">
                  <FcGoogle className="text-2xl" />
                  Sign up with Google
                </ButtonForm>

                <p
                  onClick={(e) => e.preventDefault()}
                  className="w-full text-center text-[#777]"
                >
                  Have an acoount?{" "}
                  <Link
                    className="focus:ring-primary-green-heavy/60 text-blue-600 underline outline-none hover:text-blue-800 focus:ring-1 focus:ring-offset-1"
                    to={"/login"}
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* image side */}

        <div className="bg-primary-green-heavy flex h-dvh w-[50%] items-center justify-center">
          <img
            src={pageCover}
            alt="page cover"
            className="h-[80%] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
