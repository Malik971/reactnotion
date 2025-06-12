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
  const sortBy = (field: string, valeur: string) => {
    const result = sortedUsers.sort((first: UsersProps, second: UsersProps) => {
      const firstValue = first[field as keyof UsersProps] || "";
      const secondValue = second[field as keyof UsersProps] || "";
      
      let order = 1;
      if (valeur === "femele") {
        order = -1;
      }

      let sortResult = 0;
      if (firstValue > secondValue) sortResult = 1;
      if (firstValue < secondValue) sortResult = -1;
      return sortResult * order;
    });
    setSortedUsers([...result]);
  };
    return (
      <section>
        <div className="flex bg-gray-200 justify-end items-center p-4 my-2 text-sm rounded-lg shadow-md gap-2">
          <span>Trier par</span>
          <button
            type="button"
            className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs"
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
