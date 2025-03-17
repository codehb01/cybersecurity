import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth";

function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuth();
  const location = useLocation(); // ✅ Use React Router's useLocation()

  // ✅ Show loading indicator while checking authentication
  if (isAuthorized === null) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  // ✅ Redirect logged-in users away from login/register pages
  if (
    isAuthorized &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/" replace />;
  }

  // ✅ Redirect unauthorized users trying to access protected pages
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
