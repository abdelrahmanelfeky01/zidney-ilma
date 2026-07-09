import { useMutation, useQueryClient } from "@tanstack/react-query";
import { confirmSignUp as confirmSignUpApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useConfirmSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: confirmSignUp } = useMutation({
    mutationFn: confirmSignUpApi,
    onSuccess: (data) => {
      navigate("/");
      queryClient.setQueryData(["user"], data.user);
      toast.success("Successfully Confirm Email");
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { confirmSignUp, isLoading };
}
