import Users from "./components/Users";
// import Messages from "./pages/Messages";
import { USERS } from "./utils/data";

function App() {
  return (
    <>
      <section className="text-3xl font-bold underline">
        <Users users={USERS} />
      </section>
    </>
  );
}

export default App;
