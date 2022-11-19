import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import BagForm from "../BagForm/BagForm";

import style from "./Main.module.css";

function Main() {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/history" />
        <Route path="/form" element={<BagForm />} />
      </Routes>
    </div>
  );
}

export default Main;
