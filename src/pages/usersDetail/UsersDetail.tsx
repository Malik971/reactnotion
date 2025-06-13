import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type UsersProps = {
  id: string;
  guid: string;
  picture: string;
  name: string;
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
<article className="p-4 bg-white rounded-lg shadow">
  <div className="flex gap-4 items-start">
    <img
      src={`https://i.pravatar.cc/150?u=${user?.id}`}
      alt="Avatar"
      className="rounded-full w-24 h-24"
    />
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">
        {user?.gender} {user?.name} {user?.surname}
      </h3>
      <p className="text-gray-600">{user?.email}</p>
      <p className="text-gray-600">{user?.phone}</p>
      <p className="text-gray-600">{user?.about}</p>
    </div>
  </div>
</article>
  );
}

export default UsersDetail;
