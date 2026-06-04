import CoursesHero from "./CoursesHero";
import CoursesSearch from "./CoursesSearch";
import CoursesFilters from "./CoursesFilters";
import CoursesGrid from "./CoursesGrid";
import { useSelector } from "react-redux";

function CoursesPage() {
  const isDark = useSelector((state) => state.general.isDark);
  return (
    <div
      className={`min-h-screen font-[Cairo,sans-serif] ${isDark ? "bg-night" : "bg-light"}`}
    >
      <CoursesHero />
      <CoursesSearch />
      <CoursesFilters />
      <CoursesGrid />
    </div>
  );
}

export default CoursesPage;
