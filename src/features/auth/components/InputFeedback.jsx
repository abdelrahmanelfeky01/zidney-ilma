import { IoMdCheckmark, IoIosCloseCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

function InputFeedback({ message, type = "error" }) {
  if (!message) return;

  const className = {
    error: "text-error/90",
    warn: "text-warn",
    success: "text-success",
  };

  const icons = {
    error: <IoIosCloseCircleOutline className="text-lg" />,
    warn: <RiErrorWarningLine className="text-lg" />,
    success: <IoMdCheckmark className="text-lg" />,
  };

  return (
    <div
      className={`${className[type]} flex items-center justify-start gap-2 transition-all duration-100`}
    >
      {icons[type]}
      <p>{message}</p>
    </div>
  );
}

export default InputFeedback;
