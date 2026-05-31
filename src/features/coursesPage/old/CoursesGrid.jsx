import { useSelector } from "react-redux";
import { coursesData } from "../../data/coursesData";
import CourseCard from "./CourseCard";

function CoursesGrid() {
  const isDark = useSelector((state) => state.general.isDark);
  return (
    <section data-aos="fade-up" className="mx-auto max-w-7xl px-8 pt-7 pb-20">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}

export default CoursesGrid;
