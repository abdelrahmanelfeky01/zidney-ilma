import { Link } from "react-router-dom";

function ButtonLink({ to = "", className = "", children }) {
  return (
    <Link
      to={to}
      className={`focus:ring-primary-green-heavy/60 focus:ring-text-end text-md mb-8 block text-sm text-blue-600 outline-none hover:text-blue-800 focus:ring-1 ${className}`}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
