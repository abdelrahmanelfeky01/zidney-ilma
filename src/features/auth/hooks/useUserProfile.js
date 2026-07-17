// hooks/useUserProfile.js
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/apiAuth";
import { useUser } from "./useUser";

export function useUserProfile() {
  const { user } = useUser();
  const userId = user?.id;

  const {
    data: profile,
    isPending: isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getUserProfile(userId),
    enabled: !!userId,
  });

  return { profile, isLoading, error, isError };
}
