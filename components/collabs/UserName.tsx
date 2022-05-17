import React, { useEffect, useState } from "react";
interface User {
  userId: string;
}
export const UserName = (user: User) => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/users/${user.userId}`
      );
      const username = await data.json();
      setName(username.name);
    };
    fetchData();
  }, [user.userId]);
  return <>{name}</>;
};
