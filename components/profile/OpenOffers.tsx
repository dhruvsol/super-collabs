import React from "react";
import { ProfileCard } from "./ProfileCard";

interface singlecollab {
  skills: Array<string>;
  status: string;
  members: Array<string>;
  createdBy: string;
  description: string;
  title: string;
  id: string;
}
interface collab {
  results: Array<singlecollab>;
}

export const OpenOffers = (results: collab) => {
  // console.log(collab);
  console.log(results);

  return (
    <>
      {results.results.map((res) => {
        const { title, description, id } = res;
        return (
          <>
            <ProfileCard title={title} description={description} id={id} />
          </>
        );
      })}
    </>
  );
};
