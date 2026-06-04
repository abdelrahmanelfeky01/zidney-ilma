import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import pageCover from "../../assets/images/loginPage_registerPage/pageCover.webp";
import { useSelector } from "react-redux";
import { Logo } from "../../ui/Icons";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  const [show, setShow] = useState(false);

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
              <div className="mb-8">
                <h2 className="text-title -mb-1 text-[2.5rem] font-bold">
                  Welcome back
                </h2>
                <p className="translate-x-0.5 text-lg text-[#777]">
                  Please enter your details
                </p>
              </div>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="mb-1 block translate-x-0.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border-primary-green/40 text-title focus:ring-primary-green-heavy/60 w-full rounded-md border p-2.5 outline-none focus:ring-1 focus:ring-offset-1"
                  placeholder="example@email.com"
                />
              </div>
              {/* Password Input */}
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="mb-1 block translate-x-0.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    className="border-primary-green/40 text-title focus:ring-primary-green-heavy/60 w-full rounded-md border p-2.5 outline-none focus:ring-1 focus:ring-offset-1"
                    type={show ? "text" : "password"}
                  />
                  {
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShow((prev) => !prev);
                      }}
                    >
                      <span className="absolute inset-e-5 top-1/2 -translate-y-1/2">
                        {show ? (
                          <LuEye className="text-description focus:ring-primary-green-heavy/60 text-xl outline-none focus:ring-1 focus:ring-offset-1" />
                        ) : (
                          <LuEyeOff className="text-description focus:ring-primary-green-heavy/60 text-xl outline-none focus:ring-1 focus:ring-offset-1" />
                        )}
                      </span>
                    </button>
                  }
                </div>
              </div>
              <a
                href="#"
                className="focus:ring-primary-green-heavy/60 focus:ring-text-end mb-8 inline-block w-full text-end text-sm text-blue-600 underline outline-none hover:text-blue-800 focus:ring-1"
              >
                Forgot password
              </a>

              <div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="bg-primary-green-heavy focus:ring-primary-green-heavy/60 mb-7 w-full cursor-pointer rounded-sm py-2 text-green-50 transition-all duration-200 outline-none hover:bg-[#2d7230] focus:ring-1 focus:ring-offset-1"
                >
                  Sign in
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-description border-primary-green-heavy/40 focus:ring-primary-green-heavy/60 mb-8 flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm border py-2 outline-none hover:bg-gray-50 focus:ring-1 focus:ring-offset-1"
                >
                  <FcGoogle className="text-2xl" />
                  Sign in with Google
                </button>

                <p
                  onClick={(e) => e.preventDefault()}
                  className="w-full text-center text-[#777]"
                >
                  Dont have an acoount?{" "}
                  <Link
                    className="focus:ring-primary-green-heavy/60 text-blue-600 underline outline-none hover:text-blue-800 focus:ring-1 focus:ring-offset-1"
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

        <div className="bg-primary-green-heavy flex h-dvh w-[50%] items-center justify-center">
          <img
            src={pageCover}
            alt="page cover"
            className="h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
