import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import App from "../../app/App";

type ProtectedRouteType = {
  redirectPath?: string;
  children: JSX.Element;
};

export const ProtectedRoute = ({
  redirectPath = "/login",
  children,
}: ProtectedRouteType): JSX.Element => {
  const isLoggedIn = useAppSelector((state) => state.auth.me);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
