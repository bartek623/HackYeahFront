import Main from "./components/Main/Main";
import { UserContextProvider } from "./store/user-context";

function App() {
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;
