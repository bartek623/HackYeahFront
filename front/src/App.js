import { Route, Routes } from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
import AppPage from "./pages/AppPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppPage />} />
      {/* <Route path="/*" element={<AuthPage />} /> */}
      {/* <Route path="/:user" element={<AppPage />} /> */}
    </Routes>
  );
}

export default App;
