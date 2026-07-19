import CoursesHero from "../components/CoursesHero";
import CoursesSearch from "../components/CoursesSearch";
import CoursesFilters from "../components/CoursesFilters";
import CoursesGrid from "../components/CoursesGrid";
import { useSelector } from "react-redux";
import { useCourses } from "../hooks/useCourses";
import { useState } from "react";

function CoursesPage() {
  const isDark = useSelector((state) => state.general.isDark);
  const { isLoading, error, courses } = useCourses();

  const [activeCategory, setActiveCategory] = useState("all");

  const coursesList = !courses
    ? []
    : {
        all: courses,
        free: courses.filter((c) => c.is_free),
        paid: courses.filter((c) => !c.is_free),
        quran: courses.filter((c) => c.category_en === "Quran"),
        languages: courses.filter((c) => c.category_en === "Languages"),
      }[activeCategory];

  return (
    <div
      className={`min-h-screen font-[Cairo,sans-serif] ${isDark ? "bg-night" : "bg-light"}`}
    >
      <CoursesHero courses={courses} isLoading={isLoading} error={error} />
      <CoursesSearch />
      <CoursesFilters
        courses={courses}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CoursesGrid
        isLoading={isLoading}
        error={error}
        coursesList={coursesList}
      />
    </div>
  );
}

export default CoursesPage;
