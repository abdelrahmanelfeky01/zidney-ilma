import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/");
      toast.success("Logged in successfully");
    },
    onError: () => {
      toast.error("Incorrect email or password. try again.");
    },
  });

  return { login, isLoading };
}
