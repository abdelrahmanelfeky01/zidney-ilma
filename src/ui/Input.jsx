import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

function Input({
  label = "label",
  type = "text",
  id = type,
  placeholder = "",
  classNameContainer = "",
  classNameInput = "",
  required = true,
}) {
  const [eyeShow, setEyeShow] = useState(false);

  return (
    <div className={`${classNameContainer} mb-2`}>
      <label htmlFor={id} className="mb-1 block translate-x-0.5">
        {label}
      </label>
      <div className="relative">
        <input
          required={required}
          id={id}
          placeholder={placeholder}
          className={`${classNameInput} border-primary-green/40 text-title focus:ring-primary-green-heavy/60 w-full rounded-md border p-2.5 outline-none focus:ring-1 focus:ring-offset-1`}
          type={
            type !== "password"
              ? type
              : type === "password" && eyeShow
                ? "text"
                : "password"
          }
        />

        {type === "password" && (
          <button
            type="button"
            className=""
            onClick={(e) => {
              e.preventDefault();
              setEyeShow((prev) => !prev);
            }}
          >
            <span className="absolute inset-e-5 top-1/2 -translate-y-1/2">
              {eyeShow ? (
                <LuEye className="text-description text-xl" />
              ) : (
                <LuEyeOff className="text-description text-xl" />
              )}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
