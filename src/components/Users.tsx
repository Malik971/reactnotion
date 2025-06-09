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
    <section>
      {users.map((user: UsersProps) => (
        <article>
          <h3>
            {user.firstName} {user.surname}
          </h3>
        </article>
      ))}
    </section>
  );
}

export default Users;
