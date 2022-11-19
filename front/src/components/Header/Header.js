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
            <Link to="/Profile">Profile</Link>
          </li>
        
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/Authorization">LOG IN / SIGN UP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
