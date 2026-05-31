import CoursesHero from "./CoursesHero";
import CoursesSearch from "./CoursesSearch";
import CoursesFilters from "./CoursesFilters";
import CoursesGrid from "./CoursesGrid";
import { useSelector } from "react-redux";

function CoursesPage() {
    const isDark = useSelector((state) => state.general.isDark);
  return (
    <div className="min-h-screen bg-[#f7f4ee] font-[Cairo,sans-serif]">
      <CoursesHero />
      <CoursesSearch />
      <CoursesFilters />
      <CoursesGrid />
    </div>
  );
}

export default CoursesPage;
