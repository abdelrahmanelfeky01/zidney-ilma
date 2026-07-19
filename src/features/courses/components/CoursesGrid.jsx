import { useEffect } from "react";
import CourseCard from "./CourseCard";
import MiniSpinner from "../../../ui/MiniSpinner";

function CoursesGrid({ isLoading, error, coursesList }) {
  useEffect(() => {
    console.log(isLoading);
    console.log(error);
    console.log(coursesList);
  }, [isLoading, error, coursesList]);

  return (
    <section
      data-aos="fade-up"
      className={`380:px-8 380:pt-8 mx-auto max-w-7xl px-6 pt-6 pb-20`}
    >
      {isLoading && <MiniSpinner />}

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {coursesList?.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}

export default CoursesGrid;
