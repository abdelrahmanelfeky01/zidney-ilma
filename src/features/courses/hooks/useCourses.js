import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/apiCourses";

export function useCourses() {
  const { isLoading, data: courses, error } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return {
    courses,
    isLoading,
    error,
  };
}