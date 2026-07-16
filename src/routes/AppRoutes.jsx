import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

// Pages
import HomePage from "../features/homepage/pages/HomePage";
import CoursesPage from "../features/courses/pages/CoursesPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";

// Routes
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";
import PageTransition from "./PageTransition";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path=""
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />

          <Route
            path="courses"
            element={
              <ProtectedRoute>
                <PageTransition>
                  <CoursesPage />
                </PageTransition>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />

        <Route
          path="/register"
          element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          }
        />

        <Route path="reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
