import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutApi,
    onSettled: () => {
      queryClient.setQueryData(["user"], null);
      queryClient.removeQueries();
      toast(t("toaster.logoutSuccess"));
      navigate("/", { replace: true });
    },
  });

  return { logout, isLoading };
}
