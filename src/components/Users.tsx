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
  let sortedUsers: UsersProps[] = users;
  const sortBy = (field: string) => {
    // Sorting logic can be implemented here if needed
    console.log(`Sorting by ${field}`);
    sortedUsers = sortedUsers.sort((first: UsersProps, second: UsersProps) => {
      const firstValue = first[field as keyof UsersProps] || "";
      const secondValue = second[field as keyof UsersProps] || "";
      if (firstValue < secondValue) return -1;
      if (firstValue > secondValue) return 1;
      return 0;
    });
  };
    return (
      <section>
        <div className="flex bg-gray-200 justify-end items-center p-4 my-2 text-sm rounded-lg shadow-md gap-2">
          <span>Trier par</span>
          <button
            type="button"
            className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs"
            onClick={() => sortBy("femele")}
          >
            Femmes
          </button>
          <button
            type="button"
            className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs"
            onClick={() => sortBy("male")}
          >
            Hommes
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {users.map(
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
