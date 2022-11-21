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
  const [user, setUser] = useState(userInitial);

  const loginHandler = function (data) {
    setUser(data);
  };

  const logoutHandler = function () {
    setUser(userInitial);
  };

  return (
    <UserContext.Provider
      value={{
        user: {
          ...user,
          login: "asd",
          firstName: "Asd",
          lastName: "Fgh",
          address: "address",
          token: 12,
        },
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
