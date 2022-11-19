import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style["main-header"]}>
      <div>Logo</div>
      <nav className={style["main-nav"]}>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
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
        </ul>
      </nav>
      <div className={style.tokens}>
        <p>Your balance: </p>
        <span>0</span>
      </div>
    </header>
  );
}

export default Header;
