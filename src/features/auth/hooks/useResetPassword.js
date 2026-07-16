import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useResetPassword() {
  const {
    mutate: resetPassword,
    isPending: isLoading,
    error,
    isError,
  } = useMutation({
    mutationFn: resetPasswordApi,
    mutationKey: ["resetPassword"],
    onSuccess: () => {
      toast.success("اذا كان هناك حساب مسجل فسيتم ارسال ال otp");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { resetPassword, isLoading, error, isError };
}
