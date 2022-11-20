import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../store/user-context";

function GuestGuard(props) {
  const userCtx = useContext(UserContext);

  if (!userCtx.user) {
    return <Navigate to="/auth" />;
  }

  return <>{props.children}</>;
}

export default GuestGuard;
