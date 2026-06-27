import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/apiAuth";

export function useSignup() {
  const { isPending: isLoading, mutate: signup } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log("data from useSignup");
      console.log(data);
    },
    mutationKey: ["signup"],
  });

  return { signup, isLoading };
}
