import { useCourses } from "../../../courses/hooks/useCourses";
import CourseCard from "../../../courses/components/CourseCard";

function CoursesGrid() {
  const { courses } = useCourses();

  // نأخذ فقط أول 3 كورسات من المصفوفة الحقيقية
  const featuredCourses = courses?.slice(0, 3) ?? [];

  return (
    <div className="mb-15 grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
      {featuredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CoursesGrid;
