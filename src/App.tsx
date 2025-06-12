import Users from "./components/Users";
// import Messages from "./pages/Messages";
import { USERS } from "./utils/data";

function App() {
  return (
    <>
      <section className="text-3xl font-bold underline">
        <div className="bg-red-600 text-white p-4">Test Background</div>
        {/* <Messages messages={MESSAGE} /> */}
        <Users users={USERS} />
      </section>
    </>
  );
}

export default App;
