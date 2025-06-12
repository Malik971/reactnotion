type UsersProps = {
  id: string;
  guid: string;
  picture: string;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  about: string;
};

type Props = {
  users: UsersProps[];
};

function Users(props: Props) {
  const users = props.users;
  return (
    <section className="grid grid-cols-4 gap-4">
      {users.map((user: UsersProps) => (
        <article key={user.guid}>
          <h3 className="bg-red-600 border border-yellow-400 rounded-lg p-4 shadow-md">
            {user.firstName} {user.surname}
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.about}</p>
          </h3>
        </article>
      ))}
    </section>
  );
}

export default Users;
