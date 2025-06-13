import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="relative">
        <div className="text-2xl text-white uppercase px-5 py-3 absolute top-5 left-10">
          <p>Les Nouvelle Vies</p>
        </div>
      </div>
      <section className="grid grid-cols-2 mx-auto h-screen">
        <div className="bg-red-600 text-white flex flex-column items-center justify-center rounded-lg shadow-md">
          <Link
            className="text-2xl border rounded-md border-b-amber-800 px-5 py-3"
            to={"/me/users"}
          >
            Les Utilisateurs
          </Link>
          <button type="button"></button>
        </div>
        <div className="bg-blue-600 text-white flex flex-column items-center justify-center rounded-lg shadow-md">
          <Link
            className="text-2xl border rounded-md border-b-amber-800 px-5 py-3"
            to={"/me/demandes"}
          >
            Les Demandes
          </Link>
          <button type="button"></button>
        </div>
      </section>
    </>
  );
}

export default App;
