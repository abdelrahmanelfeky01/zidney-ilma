import { useSelector } from "react-redux";
import { Logo } from "../../ui/Icons";
import { MdOutlineVpnKey } from "react-icons/md";
import Input from "../../ui/Input";
import ButtonForm from "../../ui/ButtonForm";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonLink from "../../ui/ButtonLink";

function ResetPasswordPage() {
  const { isDark } = useSelector((state) => state.general);
  return (
    <div className={`${isDark ? "bg-night" : "bg-light"}`}>
      <>
        <Logo classNameString={"fixed top-8 left-23 z-5555"} h={45} />
        <div
          className={`mx-auto flex h-dvh w-150 animate-[fadeIn_0.5s_ease] flex-col items-center justify-center`}
        >
          <div className="mb-10">
            <MdOutlineVpnKey className="border-primary-green/10 text-title rounded-xl border p-3.5 text-8xl shadow-md" />
          </div>
          <div className="mb-12 w-[70%] text-center">
            <h2 className="text-title mb-6 text-4xl font-semibold">
              Forgot your password?
            </h2>
            <p className="text-description text-xl">
              A code will be sent to your email to help reset password
            </p>
          </div>
          <form className="w-[70%]">
            <Input
              label="Email Address"
              type="email"
              id={"email"}
              placeholder="Enter your email address"
              required={true}
              classNameInput="w-60 text-lg"
              classNameContainer="mb-6"
            />
            <ButtonForm
              type="submit"
              className="bg-primary-green-heavy text-[1.1rem] text-green-50 hover:bg-[#2d7230]"
            >
              Reset password
            </ButtonForm>
          </form>

          <ButtonLink
            to="/login"
            className="group bg bg flex items-center gap-2"
          >
            <FaArrowLeftLong className="hover text-xl transition-all duration-300 group-hover:-translate-x-1" />
            <span className="text-md">Back to login</span>
          </ButtonLink>
        </div>
      </>
    </div>
  );
}

export default ResetPasswordPage;
