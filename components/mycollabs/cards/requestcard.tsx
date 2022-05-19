import { useEffect, useState } from "react";
import { GetUseNameCollab, UserName } from "../../collabs/UserName";

interface request {
  description: string;
  collab: string;
  id: string;
  commitHours: number;
}
export const Requestcard = (requests: request) => {
  const { description, id, commitHours, collab } = requests;
  const [name, setName] = useState<string>("");
  // when accepted
  const accepted = () => {
    fetch(`https://intense-mesa-39554.herokuapp.com/v1/collaborators/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "accepted",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // fetch;
  };
  //when rejected
  const rejected = () => {
    fetch(`https://intense-mesa-39554.herokuapp.com/v1/collaborators/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "rejected",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  useEffect(() => {
    const GetUserId = async () => {
      const collabInfo = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/collabs/${collab}`
      );
      const userId = await collabInfo.json();
      setName(userId.createdBy);
    };
    GetUserId();
  }, [collab]);
  return (
    <>
      <div className="w-full flex justify-center py-8  relative ">
        <div className="bg-white  w-5/6 h-96  rounded-lg md:h-56 drop-shadow-2xl ">
          <div className="flex flex-col justify-evenly items-center h-full px-4 md:place-items-start ">
            <h1 className="font-bold text-2xl text-center md:text-left">
              {/* <UserName userId={name} /> */}
              <GetUseNameCollab userId={collab} />
            </h1>
            <p className="font-normal text-lg text-center md:text-left">
              {description}
            </p>
            <p className="font-normal text-lg text-center md:text-left">
              Commited Hours: {commitHours}
            </p>
            <hr className="bg-black  w-full " />
            <div className="flex justify-center md:justify-end w-full gap-x-10">
              <button
                onClick={() => accepted()}
                className="mt-5 py-2 px-4 rounded-lg border text-green-500 border-green-500 hover:bg-green-500 hover:text-black  cursor-pointer   hover:font-semibold lg:p-2 lg:px-4 lg:mt-0"
              >
                Accept
              </button>
              <button
                onClick={() => rejected()}
                className="mt-5 py-2 px-4 rounded-lg border text-red-500 border-red-500 hover:text-black hover:bg-red-500  cursor-pointer   hover:font-semibold lg:p-2 lg:px-4 lg:mt-0"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
