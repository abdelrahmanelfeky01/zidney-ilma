import { useMutation } from "@tanstack/react-query";
import { resendResetPassword as resendResetPasswordApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useResendResetPassword() {
  const {
    mutate: resendResetPassword,
    isPending: isLoading,
    error,
    isError,
  } = useMutation({
    mutationFn: resendResetPasswordApi,
    mutationKey: ["resendResetPassword"],
    onSuccess: () => {
      toast.success("تم اعادة ارسال رمز التحقق");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { resendResetPassword, isLoading, error, isError };
}
