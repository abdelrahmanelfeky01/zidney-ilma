import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ButtonLink({ to = "", className = "", children }) {
  const isDark = useSelector((state) => state.general.isDark);

  return (
    <Link
      to={to}
      className={`${
        isDark
          ? "text-blue-400 hover:text-blue-300"
          : "text-blue-600 hover:text-blue-800"
      } focus:ring-primary-green-heavy/60 focus:ring-text-end text-md mb-8 block text-sm outline-none focus:ring-1 ${className}`}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
