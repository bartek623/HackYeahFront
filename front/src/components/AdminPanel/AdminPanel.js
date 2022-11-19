import { useState } from "react";

import style from "./AdminPanel.module.css";

function AdminPanel() {
  const [showResults, setShowResults] = useState("");

  const showUsers = function () {
    setShowResults("users");
  };

  const showBags = function () {
    setShowResults("bags");
  };

  const showReceivers = function () {
    setShowResults("receivers");
  };

  return (
    <main className={style.main}>
      <div className={style.card}>
        <div className={style.options}>
          <button
            className={style[`${showResults === "users" ? "active" : ""}`]}
            onClick={showUsers}
          >
            Users
          </button>
          <button
            className={style[`${showResults === "bags" ? "active" : ""}`]}
            onClick={showBags}
          >
            Bags
          </button>
          <button
            className={style[`${showResults === "receivers" ? "active" : ""}`]}
            onClick={showReceivers}
          >
            Receivers
          </button>
        </div>
        <div className={style.results}></div>
      </div>
    </main>
  );
}

export default AdminPanel;
