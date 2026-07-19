import { useQuery } from "@tanstack/react-query";
import { getCourseBySlug } from "../services/apiCourses";

export function useCourse(slug) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: () => getCourseBySlug(slug),
    enabled: !!slug,
  });
}
