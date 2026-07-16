import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithGoogleIdToken } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useSigninWithGoogle() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: signInWithGoogleIdTokenFn, isPending: isLoading } =
    useMutation({
      mutationFn: signInWithGoogleIdToken,
      mutationKey: ["signInWithGoogle"],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        navigate("/", { replace: true });
        toast.success(t("toaster.loginSuccess"));
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { signInWithGoogleIdTokenFn, isLoading };
}
