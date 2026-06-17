import CoursesHero from "../components/CoursesHero";
import CoursesSearch from "../components/CoursesSearch";
import CoursesFilters from "../components/CoursesFilters";
import CoursesGrid from "../components/CoursesGrid";
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
