import { useContext } from "react";

import { UserContext } from "../store/user-context";
import { Navigate } from "react-router-dom";

function UserGuard(props) {
  const userCtx = useContext(UserContext);

  if (userCtx.user?.login) {
    return <Navigate to={`/`} />;
  }

  return <>{props.children}</>;
}

export default UserGuard;
