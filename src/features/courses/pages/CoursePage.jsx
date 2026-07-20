import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import CourseSidebar from "../components/CourseSidebar";
import LectureViewer from "../components/LectureViewer";
import LectureDescription from "../components/LectureDescription";

function CoursePage() {
  return (
    <div className="bg-light min-h-screen">
      <div className="bg-bg-light/90 top-0 z-10 border-b border-[#ede8e0] px-4 py-3 backdrop-blur-sm sm:px-6">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#333] hover:text-black"
        >
          <HiArrowLeft className="h-4 w-4" />
          Back to all courses
        </Link>
      </div>

      <div className="mx-auto flex max-w-400 flex-col-reverse gap-6 p-4 sm:p-6 lg:flex-row-reverse">
        <CourseSidebar />

        <main className="min-w-0 flex-1">
          <LectureViewer />
          <LectureDescription />
        </main>
      </div>
    </div>
  );
}

export default CoursePage;
