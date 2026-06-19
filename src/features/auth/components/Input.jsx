import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

function Input({
  label = "label",
  type = "text",
  onChange = () => {},
  value,
  disabled = false,
  id = type,
  placeholder = "",
  classNameContainer = "",
  classNameInput = "",
  required = true,
  dir = "ltr",
}) {
  const [eyeShow, setEyeShow] = useState(false);

  return (
    <div className={`${classNameContainer} mb-4`}>
      <label
        htmlFor={id}
        className="text-title mb-1 block translate-x-0.5 font-medium"
      >
        {label}
      </label>
      <div className="relative">
        <input
          autoComplete="on"
          onChange={onChange}
          value={value}
          dir={dir}
          disabled={disabled}
          required={required}
          id={id}
          placeholder={placeholder}
          className={`${classNameInput} border-primary-green/30 text-title focus:ring-primary-green-heavy/60 w-full rounded-lg border p-2.5 outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
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
            dir={dir}
            type="button"
            tabIndex={-1}
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
