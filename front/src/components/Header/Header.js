import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";


function Header() {
  const [isUnrolled, setUnRolled] = useState(false);
  const mobileMenuHandler = function(){
    setUnRolled(p=>!p);
  }

  return (
    <header className={style['main-header']}>
      <div className={style.logo}>Logo</div>
      <button onClick={mobileMenuHandler} className='material-symbols-outlined' >
        menu
      </button>
      <nav className={`${style['main-nav']} ${isUnrolled ? style.unrolled : ''} `}>
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
          <li>
            <Link to="/withdraw">Withdraw</Link>
          </li>
          <li>
            <Link to="/admin-panel">Admin Panel</Link>
          </li>
        </ul>
      </nav>
      <div className={style.tokens}>
        <p>Tokens balance: </p>
        <span>0</span>
      </div>
    </header>
  );
}

export default Header;
