import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./features/HomePage/HomePage";
import PageNotFound from "./ui/PageNotFound";
import CoursesPage from "./features/coursesPage/CoursesPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { isDark } = useSelector((state) => state.general);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route element={<AppLayout />}>
          {/* HomePage */}
          <Route path="" element={<HomePage />} />

          {/* Courses Page */}
          <Route path="courses" element={<CoursesPage />} />
          {/* Error Pages */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
