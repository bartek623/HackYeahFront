import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import style from "./Header.module.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

function Header() {
  //
  const { setData } = useFetch();
  //

  const userCtx = useContext(UserContext);

  const logoutHandler = function () {
    userCtx.logout();
  };

  const [isUnrolled, setRolled] = useState(false);

  const mobileMenuHandler = function () {
    setRolled((p) => !p);
  };

  const checkApiHandler = function () {
    const data = { login: "aasd", password: "asdasfafs" };
    setData(
      data,
      (info) => {
        console.log(info);
      },
      "api/receivers"
    );
  };

  return (
    <header className={style["main-header"]}>
      <div>Logo</div>
      <button onClick={mobileMenuHandler} className="material-symbols-outlined">
        menu
      </button>
      <nav
        className={`${style["main-nav"]} ${isUnrolled ? style.unrolled : ""}`}
      >
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          {userCtx.user?.login && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/withdraw">Withdraw</Link>
              </li>
              <li>
                <Link to="/admin-panel">Admin Panel</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
          {!userCtx.user?.login && (
            <li>
              <Link to="/authorization">Log in</Link>
            </li>
          )}
          <li>
            <button onClick={checkApiHandler}>Check Api</button>
          </li>
        </ul>
      </nav>
      <div className={style.tokens}>
        <p>Your balance: </p>
        <span>{userCtx.user.token}</span>
      </div>
    </header>
  );
}

export default Header;
