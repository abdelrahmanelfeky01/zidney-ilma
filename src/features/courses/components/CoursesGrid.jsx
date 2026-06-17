import { coursesData } from "../../../data/coursesData";
import CourseCard from "./CourseCard";

function CoursesGrid() {
  return (
    <section
      data-aos="fade-up"
      className={`380:px-8 380:pt-8 mx-auto max-w-7xl px-6 pt-6 pb-20`}
    >
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}

export default CoursesGrid;
