import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    <span className="loading loading-infinity loading-md"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoutes;
