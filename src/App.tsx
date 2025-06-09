import Messages from "./pages/Messages";
import { MESSAGE } from "./utils/data";


function App() {
  return (
    <>
      <Messages messages={MESSAGE} />
    </>
  );
}

export default App;
