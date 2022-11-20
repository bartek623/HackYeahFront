import { useContext } from "react";

import { UserContext } from "../store/user-context";
import { Navigate } from "react-router-dom";

function UserGuard(props) {
  const userCtx = useContext(UserContext);
  console.log(userCtx.user);

  if (userCtx.user) {
    return <Navigate to={`/`} />;
  }

  return <>{props.children}</>;
}

export default UserGuard;
