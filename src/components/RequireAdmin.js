import { Navigate, useLocation } from "react-router-dom";

export default function RequireAdmin({ children }) {
  const location = useLocation();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return (
      <Navigate
        to="/admin"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
