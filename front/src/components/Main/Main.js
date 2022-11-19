import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Homepage from "../Homepage/Homepage";
import PageNotFound from "../PageNotFound/PageNotFound";
import BagForm from "../BagForm/BagForm";
import Authorization from "../Authorization/Authorization";
import History from "../History/History";
import AdminPanel from "../AdminPanel/AdminPanel";

import style from "./Main.module.css";

function Main() {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Authorization" element={<Authorization />} />
        <Route path="/history" />
        <Route path="/history" element={<History />} />
        <Route path="/form" element={<BagForm />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default Main;
