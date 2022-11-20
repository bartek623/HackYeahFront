import React, { useState } from "react";

const userInitial = {
  login: "",
  firstName: "",
  lastName: "",
  address: "",
  token: 0,
};

export const UserContext = React.createContext({
  user: userInitial,
  login: (data) => {},
  logout: () => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  const loginHandler = function (data) {
    setUser(data);
  };

  const logoutHandler = function () {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, login: loginHandler, logout: logoutHandler }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
