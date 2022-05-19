import { useEffect, useState } from "react";
import { Requestcard } from "./cards/requestcard";
type collaborators = {
  status: string;
  commitHours: number;
  collab: string;
  user: string;
  note: string;
  id: string;
};

type offerCollaborators = {
  results: Array<collaborators>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
};

export const Request = () => {
  const [data, setData] = useState<offerCollaborators>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/collaborators?&status=requested&user=${localStorage.currentUser}`
      );
      const collaborator = await data.json();
      setData(collaborator);
    };
    fetchData();
  }, []);
  return (
    <>
      {data?.results.map((offers: collaborators) => {
        const { note, id, collab, commitHours } = offers;
        return (
          <>
            <div key={collab + id}>
              <Requestcard
                description={note}
                id={id}
                collab={collab}
                commitHours={commitHours}
              />
            </div>
          </>
        );
      })}
    </>
  );
};
