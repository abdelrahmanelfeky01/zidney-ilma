import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/hooks/useUser";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";

function GuestRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  //- if user authed redirect to homepage
  useEffect(
    function () {
      if (isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate],
  );

  // 1. Loading Spinner

  if (isLoading) return <Spinner />;

  // 3.if not auth return children in this Case (Login and Register Page)
  if (!isAuthenticated) return children;
}

export default GuestRoute;
