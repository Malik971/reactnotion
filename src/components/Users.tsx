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
    <section className="container mx-auto"> 
      {users.map((user: UsersProps) => (
        <article>
          <h3  className="users">
            {user.firstName} {user.surname}
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.about}</p>
          </h3>
        </article>
      ))}
    </section>
  );
}

export default Users;
