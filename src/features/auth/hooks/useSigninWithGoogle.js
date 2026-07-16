import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle as signInWithGoogleApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useSigninWithGoogle() {
  const { mutate: signInWithGoogle, isPending: isLoading } = useMutation({
    mutationFn: signInWithGoogleApi,
    mutationKey: ["signInWithGoogle"],
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signInWithGoogle, isLoading };
}
