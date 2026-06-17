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

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="" element={<HomePage />} />

        <Route
          path="courses"
          element={
            <ProtectedRoute>
              <CoursesPage />
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

      <Route
        path="reset-password"
        element={
          <GuestRoute>
            <ResetPasswordPage />
          </GuestRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
