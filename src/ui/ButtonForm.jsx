function ButtonForm({ type = "submit", className = "", onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} focus:ring-primary-green-heavy/60 mb-7 w-full cursor-pointer rounded-sm py-2.5 transition-all duration-200 outline-none focus:ring-1 focus:ring-offset-1`}
    >
      {children}
    </button>
  );
}

export default ButtonForm;
