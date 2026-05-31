import { useSelector } from "react-redux";
import CoursesGrid from "./CoursesGrid";
import HeaderCourses from "./HeadeCourses";
import ButtonAllCourses from "./ButtonAllCourses";

export default function FreeCourses() {
  const isDark = useSelector((state) => state.general.isDark);

  return (
    <section
      data-aos="fade-up"
      id="free-courses"
      className={`px-4 py-22 sm:px-6 lg:px-10 ${isDark ? "bg-[#111a14]" : "bg-[#f5f2ea]"}`}
    >
      <div className="mx-auto max-w-290">
        <HeaderCourses />
        <CoursesGrid />
        <ButtonAllCourses />
      </div>
    </section>
  );
}
