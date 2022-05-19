import React, { useEffect, useState } from "react";
import { Groupcard } from "./cards/groupcard";
type collabs = {
  skills: Array<any>;
  status: string;
  members: Array<string>;
  createdBy: string;
  description: string;
  title: string;
  id: string;
};

type offerCollabs = {
  results: Array<collabs>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
};
export const Groups = () => {
  const [data, setData] = useState<offerCollabs>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/collabs?status=open&createdBy=${localStorage.currentUser}`
      );
      const collaborator = await data.json();
      setData(collaborator);
    };
    fetchData();
  }, []);
  return (
    <>
      {data?.results.map((group) => {
        const { skills, members, description, title, id } = group;
        return (
          <>
            <Groupcard
              title={title}
              description={description}
              skills={skills}
              members={members}
              id={id}
            />
          </>
        );
      })}
    </>
  );
};
