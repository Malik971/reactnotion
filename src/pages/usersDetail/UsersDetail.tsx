import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UsersDetail() {
  let { userId } = useParams();
  const [user, setUser] = useState();
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
  return <article>{JSON.stringify(user, null, 2)}</article>;
}

export default UsersDetail;
