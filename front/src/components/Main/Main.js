import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

import style from "./Main.module.css";

function Main() {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/profile" />
        <Route path="/history" />
        <Route path="/form" />
      </Routes>
    </div>
  );
}

export default Main;
