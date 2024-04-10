import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./src/context/AuthContext";

function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
