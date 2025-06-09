import Users from "./components/Users";
import Messages from "./pages/Messages";
import { MESSAGE, USERS } from "./utils/data";


function App() {
  return (
    <>
      <Messages messages={MESSAGE} />
      <Users users={USERS} />
    </>
  );
}

export default App;
