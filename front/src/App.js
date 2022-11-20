import AppPage from "./pages/AppPage";
import { UserContextProvider } from "./store/user-context";

function App() {
  return (
    <UserContextProvider>
      <AppPage />
    </UserContextProvider>
  );
}

export default App;
