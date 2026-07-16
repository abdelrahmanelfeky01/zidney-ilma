import { useMutation } from "@tanstack/react-query";
import { signInWithGoogleIdToken } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useSigninWithGoogle() {
  const { mutate: signInWithGoogleIdTokenFn, isPending: isLoading } =
    useMutation({
      mutationFn: signInWithGoogleIdToken,
      mutationKey: ["signInWithGoogle"],
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { signInWithGoogleIdTokenFn, isLoading };
}
