import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutApi,
    onSettled: () => {
      queryClient.removeQueries();
      toast("Successfully Logout");
      navigate("/", { replace: true });
    },
  });

  return { logout, isLoading };
}
