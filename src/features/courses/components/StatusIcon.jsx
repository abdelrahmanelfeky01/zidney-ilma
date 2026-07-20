import { HiCheckCircle, HiLockClosed, HiPlay } from "react-icons/hi2";


function StatusIcon({ status = "pending" }) {
  if (status === "completed") {
    return (
      <HiCheckCircle className="text-primary-green h-[18px] w-[18px] shrink-0" />
    );
  }

  if (status === "locked") {
    return (
      <HiLockClosed className="h-[15px] w-[15px] shrink-0 text-[#a8b0a8]" />
    );
  }

  if (status === "active") {
    return (
      <span className="bg-primary-green flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full">
        <HiPlay className="h-2.5 w-2.5 text-white" />
      </span>
    );
  }

  // status === "pending"
  return (
    <span className="h-[15px] w-[15px] shrink-0 rounded-full border-2 border-[#cdd6cd]" />
  );
}

export default StatusIcon;
