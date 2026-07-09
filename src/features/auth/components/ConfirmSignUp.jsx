import { MdOutlineMarkEmailRead } from "react-icons/md";
import ButtonLink from "../components/ButtonLink";
import Input from "./Input";
import ButtonForm from "./ButtonForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useConfirmSignUp } from "../hooks/useConfirmSignUp";
import { useEffect, useState } from "react";

function ConfirmSignUp({ email }) {
  const isDark = useSelector((state) => state.general.isDark);
  const [token, setToken] = useState("");
  const { isLoading, confirmSignUp } = useConfirmSignUp();

  useEffect(
    function () {
      console.log(token);
      console.log(email);
    },
    [token, email],
  );

  function onVerify(e) {
    e.preventDefault();
    confirmSignUp({ token, email });
  }

  return (
    <div>
      <div className="mb-4">
        <MdOutlineMarkEmailRead className="text-primary-green-heavy text-7xl" />
      </div>

      {/* Title and Description */}
      <div className="mb-10">
        <h2 className="text-title mb-6 text-3xl font-semibold">
          Verify Email Address
        </h2>
        <p className="text-description text-lg">
          We've sent an OTP to your email address. Please enter the OTP to
          verify your account.
        </p>
      </div>

      {/* OTP Input */}
      <div>
        <form className="flex flex-col">
          <Input
            value={token}
            isLabel={false}
            onChange={(e) => setToken(e.target.value)}
            maxLength="6"
            label="Enter OTP"
            classNameInput="text-2xl font-semibold text-title tracking-[10px] focus:ring-2 focus:ring-offset-3 -me-[10px] text-center border-dashed border-3"
          />
          {/* Button */}
          <div>
            <ButtonForm
              onClick={(e) => onVerify(e)}
              className="bg-primary-green-heavy text-xl text-green-50 hover:bg-[#348538]"
            >
              Verify
            </ButtonForm>
          </div>
        </form>
      </div>

      {/* Have an account? */}
      <div className="flex items-center justify-center gap-1">
        <p className="text-description">Already have an account? </p>
        <Link
          to={"/login"}
          className={`${
            isDark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          } focus:ring-primary-green-heavy/60 focus:ring-text-end text-md text-sm outline-none focus:ring-1`}
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default ConfirmSignUp;
