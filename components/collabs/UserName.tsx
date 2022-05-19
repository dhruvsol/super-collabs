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

export const GetUseNameCollab = (collab: User) => {
  const [name, setName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  useEffect(() => {
    const GetUserId = async () => {
      const collabInfo = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/collabs/${collab}`
      );
      const userId = await collabInfo.json();
      setUserId(userId.createdBy);
    };
    GetUserId();
    const fetchData = async () => {
      const data = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/users/${userId}`
      );
      const username = await data.json();
      setName(username.name);
    };
    fetchData();
  }, [collab, userId]);
  return <>{name}</>;
};
