import { useState } from "react";

type UsersProps = {
  id: string;
  guid: string;
  picture: string;
  firstName: string;
  surname: string;
  email?: string;
  phone: string;
  address: string;
  about: string;
  gender: string;
};

type Props = {
  users: UsersProps[];
};

function Users({ users }: Props) {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [reverseOrdre, setReverseOrdre] = useState(1);
  const sortBy = (field: string, valeur: string) => {
    const result = sortedUsers.sort((first: UsersProps, second: UsersProps) => {
      const firstValue = first[field as keyof UsersProps] || "";
      const secondValue = second[field as keyof UsersProps] || "";

      let order = 1;
      if (valeur === "femele" || valeur === "-1") {
        order = -1;
      }

      let sortResult = 0;
      if (firstValue > secondValue) sortResult = 1;
      if (firstValue < secondValue) sortResult = -1;
      return sortResult * order;
    });
    setSortedUsers([...result]);
  };
  const sortReverse = () => {
    const result = sortedUsers.sort((first: UsersProps, second: UsersProps) => {
      const firstValue = first.firstName;
      const secondValue = second.firstName;
      const order = reverseOrdre === 1 ? -1 : 1;
      setReverseOrdre(order);


      let sortResult = 0;
      if (firstValue > secondValue) sortResult = 1;
      if (firstValue < secondValue) sortResult = -1;
      return sortResult * reverseOrdre;
    });
    setSortedUsers([...result]);
  };
  return (
    <section>
      <div className="flex bg-gray-200 justify-end items-center p-4 my-2 text-sm rounded-lg shadow-md gap-2">
        <span>Trier par</span>
        <button
          type="button"
          className="border border-red-400 bg-gray-50 rounded-md px-2 py-1 text-xs"
          onClick={() => sortBy("gender", "femele")}
        >
          Femmes
        </button>
        <button
          type="button"
          className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs"
          onClick={() => sortBy("gender", "male")}
        >
          Hommes
        </button>
        <button
          type="button"
          className="border border-blue-400 bg-gray-50 rounded-md px-2 py-1 text-xs"
          onClick={() => sortReverse()}
        >
          Reverse
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {sortedUsers.map(
          ({
            id,
            firstName,
            surname,
            email = "Inconnu", // Default value for email
            phone,
            about,
            gender,
          }: UsersProps) => (
            <article
              className="bg-white border border-gray-300 text-sm rounded-lg p-4 shadow-md"
              key={id}
            >
              <h3 className="text-lg">
                {gender} {firstName} {surname}
              </h3>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{about}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Users;
