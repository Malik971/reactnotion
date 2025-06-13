import { useEffect, useState } from "react";
import { DEMANDES } from "../../utils/data";
import { Link } from "react-router-dom";

type DemandeProps = {
  id?: number;
  body?: string;
  userId?: number;
  title?: string;
};

function Demandes() {
  const [sortedUsers, setSortedUsers] = useState<DemandeProps[]>(DEMANDES);

  const getDemandesWithAsyncAwait = async () => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await reponse.json();
    setSortedUsers(users);
  };
  useEffect(() => {
    getDemandesWithAsyncAwait();
  }, []);
  return (
    <section>
      <div className="flex bg-gray-200 justify-end items-center p-4 my-2 text-sm rounded-lg shadow-md gap-2">
        <span>Trier par</span>
        <button
          type="button"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Date
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Statut
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {sortedUsers.map(({ id, body, title }: DemandeProps) => (
          <Link
            to={`${id}`}
            className="bg-white border border-gray-300 text-sm rounded-lg p-4 shadow-md"
            key={id}
          >
            <h3 className="text-lg">
              {body} {title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Demandes;
