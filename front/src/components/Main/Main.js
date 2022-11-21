import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Homepage from "../Homepage/Homepage";
import PageNotFound from "../PageNotFound/PageNotFound";
import BagForm from "../BagForm/BagForm";
import Authorization from "../Authorization/Authorization";
import History from "../History/History";
import AdminPanel from "../AdminPanel/AdminPanel";

function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/form" element={<BagForm />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default Main;
