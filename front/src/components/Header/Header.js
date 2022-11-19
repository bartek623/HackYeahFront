import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style["main-header"]}>
      <div>Logo</div>
      <nav className={style["main-nav"]}>
        <ul>
          <li>
            <Link to="/home">Homepage</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;