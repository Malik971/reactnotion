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
    <section className="grid md:grid-cols-3 gap-4">
      {users.map(({ id, firstName, surname, email, phone, about}: UsersProps) => (
        <article className="bg-white border border-gray-300 rounded-lg p-4 shadow-md" key={id}>
          <h3 className="text-lg">
            {firstName} {surname}
            <p>{email}</p>
            <p>{phone}</p>
            <p>{about}</p>
          </h3>
        </article>
      ))}
    </section>
  );
}

export default Users;
