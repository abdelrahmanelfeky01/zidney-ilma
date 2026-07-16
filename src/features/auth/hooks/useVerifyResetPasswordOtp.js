import { useMutation } from "@tanstack/react-query";
import { verifyResetPasswordOtp as verifyResetPasswordOtpApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export default function useVerifyResetPasswordOtp() {
  const {
    mutate: verifyResetPasswordOtp,
    isPending: isLoading,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: verifyResetPasswordOtpApi,
    mutationKey: ["verifyResetPasswordOtp"],
    onSuccess: () => {
      toast.success("Code verified successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { verifyResetPasswordOtp, isLoading, error, isError, isSuccess };
}
