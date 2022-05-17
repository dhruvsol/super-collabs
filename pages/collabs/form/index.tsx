import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
const OfferForm: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [skillsplit, setSkillsplit] = useState<string>("");
  const [skills, setSkills] = useState<Array<string>>([]);

  const PostData = () => {
    setSkills(skillsplit.split(/[\s;]+/));
    fetch("https://intense-mesa-39554.herokuapp.com/v1/collabs/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,

        skills: skills,
        createdBy: localStorage.getItem("currentUser"),
        status: "open",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  const router = useRouter();
  return (
    <>
      <div className="bg-neutral-900 relative min-h-screen ">
        <div className="absolute inset-0 min-h-screen -skew-y-12 transform  origin-top-left  ">
          <div className=" grid grid-cols-10 grid-rows-6  min-h-screen transform  ">
            <div className="bg-yellow-300 opacity-50 row-start-2 col-span-2"></div>
            <div className="bg-yellow-400 opacity-50 row-start-4 col-span-2"></div>
            <div className="bg-yellow-300 opacity-50 col-start-9 row-start-6 col-span-2"></div>
            <div className="bg-yellow-400 opacity-50 row-start-3 col-start-9 col-span-2"></div>
            <div className="bg-yellow-400 opacity-50 row-start-4 col-start-8 col-span-1"></div>
            <div className="bg-yellow-500 opacity-50 col-start-3 row-start-5 col-span-1"></div>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center  min-h-screen">
            <div className="bg-white w-5/6 h-5/6 rounded-xl py-6 px-4 lg:w-1/2 lg:h-1/2">
              <h1 className="flex justify-center items-center text-xl py-2 ">
                Make a collab
              </h1>
              <div className="flex justify-center flex-col gap-y-4">
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 ">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="block w-full border-0 p-0 text-black  focus:ring-0 sm:text-sm focus-visible:outline-none lg:text-xl"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 ">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className=" resize-none lg:text-xl block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Skills
                  </label>
                  <textarea
                    className=" lg:text-xl resize-none block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                    name="skills"
                    id="skills"
                    rows={5}
                    placeholder="Enter the skills"
                    onChange={(e) => setSkills(e.target.value.split(/[\s;]+/))}
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => router.push("/collabs")}
                    className="py-2 px-4 rounded-lg  border-2  border-yellow-300 hover:bg-yellow-300 hover:font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      PostData();
                      router.push("/collabs");
                    }}
                    className="py-2 px-6 rounded-lg border-2 border-yellow-300 bg-yellow-300 hover:scale-105 hover:font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OfferForm;
