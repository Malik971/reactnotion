import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

function UsersDetail() {
  let { userId } = useParams();
  const [user, setUser] = useState<UsersProps>();
  // This component is a placeholder for user details
  // You can implement the logic to fetch and display user details here
  const getOneUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    setUser(user);
  };
  useEffect(() => {
    getOneUser();
  }, []);
  return (
    <article>
      <div className="flex">
        <div className="">
          <h3 className="text-lg">
            {user?.gender} {user?.firstName} {user?.surname}
          </h3>
          <p>{user?.email}</p>
          <p>{user?.phone}</p>
          <p>{user?.about}</p>
        </div>
      </div>
    </article>
  );
}

export default UsersDetail;
