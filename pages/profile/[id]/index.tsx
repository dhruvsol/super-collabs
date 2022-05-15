import Image from "next/image";
import { Navbar } from "../../../components/navbar";

type users = {
  skills: Array<string>;
  daoXP: number;
  superXP: number;
  walletAddress: string;
  name: string;
  id: string;
};
type userApi = {
  results: Array<users>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
};
const Id = () => {
  // if()
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
        <div className="relative md:px-16">
          <div className="flex md:justify-between md:flex-row   items-center flex-col justify-center">
            <div>
              <div className="flex justify-center flex-col pt-5 items-center gap-x-5 md:flex-row md:justify-start ">
                <Image
                  src="/profile.svg"
                  alt="profile"
                  width={80}
                  height={80}
                />
                <h1 className="text-xl md:text-3xl text-white md:font-semibold ">
                  Name
                </h1>
              </div>
              <div className="flex justify-center gap-x-3 md:justify-start">
                <div className=" flex py-2  px-6 bg-yellow-300 rounded-2xl mt-4">
                  <h1>skills</h1>
                </div>
                <div className=" flex py-2  px-6 bg-yellow-300 rounded-2xl mt-4">
                  <h1>skills</h1>
                </div>
              </div>
              <div className="flex justify-center mt-4 flex-col items-center md:flex-row md:justify-start gap-x-5">
                <h1 className="text-yellow-300 text-2xl hover:text-yellow-300">
                  25 XP
                </h1>
                <h1 className="text-yellow-300 text-2xl hover:text-yellow-300">
                  Address
                </h1>
              </div>
            </div>
            <div className="mt-5">
              <button className="py-1 px-4 border border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400  rounded-2xl  text-xl">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Id;
