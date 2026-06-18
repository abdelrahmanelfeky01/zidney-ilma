import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useLogin() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/");
      toast.success(t("toaster.loginSuccess"));
    },
    onError: () => {
      toast.error(t("toaster.loginError"));
    },
  });

  return { login, isLoading };
}
