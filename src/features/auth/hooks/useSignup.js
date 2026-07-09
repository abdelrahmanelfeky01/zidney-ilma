import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    isPending: isLoading,
    mutate: signup,
    error,
    isError,
  } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (data) => {
      console.log("data from useSignup");
      console.log(data);
    },
    mutationKey: ["signup"],

    onError(err) {
      toast.error(err.message);
    },
  });

  return { signup, isLoading, error, isError };
}
