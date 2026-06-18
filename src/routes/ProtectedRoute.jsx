import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/hooks/useUser";
import { useEffect } from "react";
import Spinner from "./../ui/Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/register");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, show a spinner
  if (isLoading) return <Spinner />;

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;

  // 5. If there no user, return null
  if (!isAuthenticated) return null;
}

export default ProtectedRoute;
