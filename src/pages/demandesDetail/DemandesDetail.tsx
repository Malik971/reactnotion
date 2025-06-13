import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type DemandeProps = {
  id: string;
  body: string;
  userId: string;
  title: string;
};

function DemandesDetail() {
  let { demandeId } = useParams();
  const [user, setUser] = useState<DemandeProps>();
  const getOneDemande = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${demandeId}`
    );
    const user = await response.json();
    setUser(user);
  };
  useEffect(() => {
    getOneDemande();
  }, []);
  return (
    <article>
      <div className="flex">
        <div className="">
          <h3 className="text-lg">
            {user?.body} {user?.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default DemandesDetail;
