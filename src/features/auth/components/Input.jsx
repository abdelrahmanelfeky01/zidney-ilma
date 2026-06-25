import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

function Input({
  onChange = () => {},
  onBlur = () => {},
  ref = () => {},
  name = "",
  isError = false,
  label = "label",
  type = "text",
  disabled = false,
  id = type,

  placeholder = "",
  classNameContainer = "",
  classNameInput = "",
  dir = "ltr",
  mb = true,
}) {
  const [eyeShow, setEyeShow] = useState(false);

  return (
    <div className={`${mb && "mb-4"} ${classNameContainer}`}>
      <label
        htmlFor={id}
        className="text-title mb-1 block translate-x-0.5 font-medium"
      >
        {label}
      </label>
      <div className="relative">
        <input
          onBlur={onBlur}
          ref={ref}
          name={name}
          autoComplete="on"
          onChange={onChange}
          dir={dir}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          className={`${isError ? "border-error/70 focus:ring-error/60 " : "focus:ring-primary-green-heavy/60 border-primary-green/30"} text-title w-full rounded-lg border p-2.5 outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${classNameInput}`}
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
