import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useUpdatePassword() {
  const navigate = useNavigate();

  const {
    mutate: updatePassword,
    isPending: isLoading,
    error,
    isError,
  } = useMutation({
    mutationFn: updatePasswordApi,
    mutationKey: ["updatePassword"],
    onSuccess: () => {
      toast.success("Password updated successfully");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updatePassword, isLoading, error, isError };
}
