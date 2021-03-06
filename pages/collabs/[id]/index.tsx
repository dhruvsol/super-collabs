import Image from "next/image";

import { Navbar } from "../../../components/navbar";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { UserName } from "../../../components/collabs/UserName";
import { useRouter } from "next/router";
import { useState } from "react";
type Collab = {
  skills: Array<any>;
  status: string;
  members: Array<string>;
  createdBy: string;
  description: string;
  title: string;
  id: string;
};

const CollabDetails = ({
  collab,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(collab);
  const router = useRouter();
  const [form, setForm] = useState<boolean>(false);
  return (
    <>
      <div className="bg-neutral-900 relative min-h-screen">
        <div className="absolute inset-0 min-h-screen -skew-y-12 transform  origin-top-left">
          <div className=" grid grid-cols-10 grid-rows-6  min-h-screen transform ">
            <div className="bg-yellow-300 opacity-50 row-start-2 col-span-2"></div>
            <div className="bg-yellow-400 opacity-50 row-start-4 col-span-2"></div>
            <div className="bg-yellow-300 opacity-50 col-start-9 row-start-6 col-span-2"></div>
            <div className="bg-yellow-400 opacity-50 row-start-3 col-start-9 col-span-2"></div>
            <div className="bg-yellow-400 opacity-50 row-start-4 col-start-8 col-span-1"></div>
            <div className="bg-yellow-500 opacity-50 col-start-3 row-start-5 col-span-1"></div>
          </div>
        </div>

        <Navbar />
        <div className="relative px-4 md:px-48">
          <div className="flex justify-center items-center pt-20  md:items-stretch   flex-col ">
            <div className="flex justify-center items-center flex-col md:justify-start md:items-start">
              <h1 className="text-2xl font-bold text-white md:text-5xl">
                {collab.title}
              </h1>
              <p className="text-white pt-2 md:text-3xl text-center">
                {collab.description}
              </p>
            </div>
            <div className="flex justify-center gap-x-3 md:justify-start md:py-3">
              <div className=" flex py-1  px-4 bg-yellow-300 rounded-2xl mt-4 md:py-2 md:px-6">
                <h1>skill</h1>
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="flex justify-center flex-col items-center py-3 md:items-start">
                <h1 className="text-xl font-bold text-white md:text-3xl md:pb-2">
                  Collab Lead
                </h1>
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/profile.svg"
                    alt="userProfile"
                    width={40}
                    height={40}
                  />
                  <h1
                    onClick={() => router.push(`/profile/${collab.createdBy}`)}
                    className="text-white text-lg md:text-3xl cursor-pointer"
                  >
                    <UserName userId={collab.createdBy} />
                  </h1>
                </div>
              </div>
              <div className="flex justify-center flex-col items-center py-3">
                <h1 className="text-xl font-bold text-white md:text-3xl md:pb-2">
                  Members
                </h1>
                <div className="flex justify-center flex-col gap-y-5">
                  {collab.members.map((id: string) => {
                    return (
                      <>
                        <div key={id} className="flex gap-x-2 ">
                          <Image
                            src="/profile.svg"
                            alt="userProfile"
                            width={40}
                            height={40}
                          />
                          <h1
                            onClick={() => router.push(`/profile/${id}`)}
                            className="text-white text-lg md:text-3xl cursor-pointer"
                          >
                            <UserName userId={id} />
                          </h1>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center md:justify-start">
              <button
                onClick={() => setForm(true)}
                className="mt-5 py-2 px-6 rounded-lg bg-yellow-400  cursor-pointer z-10 hover:scale-110 hover:font-semibold lg:p-3 lg:mt-8 "
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        {form && (
          <>
            <div className="z-40 fixed  transition-opacity w-full">
              <div className="w-full flex justify-center items-center">
                <div className="fixed inset-0 bg-light-black backdrop-blur-sm">
                  <div className="flex justify-center min-h-screen items-center">
                    <div className="w-96 h-max bg-white rounded-2xl py-10">
                      <div className="flex justify-center items-center flex-col gap-y-6 pt-10 px-5  ">
                        <div className="relative border border-gray-300 rounded-md px-2 py-2 shadow-sm focus-within:ring-1 w-full ">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                          >
                            Commited Hours
                          </label>
                          <input
                            className=" resize-none lg:text-lg block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                            placeholder=" Commited Hours"
                          />
                        </div>
                        <div className="w-full relative border border-gray-300 rounded-md px-2 py-2 shadow-sm focus-within:ring-1 ">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                          >
                            Note
                          </label>
                          <input
                            className=" resize-none lg:text-lg block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                            placeholder="Note for the collab Lead"
                          />
                        </div>
                        <button
                          onClick={() => setForm(false)}
                          className="w-24 h-10 bg-yellow-300 rounded-xl"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const CollabData = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collabs/${params?.id}`
  );
  const collab: Collab = await CollabData.json();
  return {
    props: {
      collab: collab,
    },
  };
};
export default CollabDetails;
