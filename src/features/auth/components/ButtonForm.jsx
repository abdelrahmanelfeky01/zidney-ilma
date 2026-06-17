function ButtonForm({
  type = "submit",
  className = "",
  onClick,
  disabled = false,
  children,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} focus:ring-primary-green-heavy/60 mb-7 w-full cursor-pointer rounded-lg py-2.5 transition-all duration-200 outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default ButtonForm;
