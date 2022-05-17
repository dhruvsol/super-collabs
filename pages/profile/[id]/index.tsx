import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Navbar } from "../../../components/navbar";

type user = {
  skills: Array<string>;
  daoXP: number;
  superXP: number;
  walletAddress: string;
  name: string;
  id: string;
};

const Id = () => {
  const router = useRouter();
  // console.log(router.query);
  const [user, setUser] = useState<user>();
  const [mainUser, setMainUser] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/users/${router.query.id}`
      );
      const currentUserInfo = await userData.json();
      setUser(currentUserInfo);
    };
    fetchData();
    setMainUser(localStorage.currentUser);
  }, [router.query]);
  console.log(router.query);
  if (router.query.id == mainUser) {
    router.push("/profile");
  }

  return (
    <>
      {router.query.id === mainUser ? (
        <h1 onLoad={() => router.push("/profile")}>404</h1>
      ) : (
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
                      {user?.name}
                    </h1>
                  </div>
                  <div className="flex justify-center gap-x-3 md:justify-start">
                    {user?.skills.map((skill, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className=" flex py-2  px-6 bg-yellow-300 rounded-2xl mt-4"
                          >
                            <h1>{skill}</h1>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="flex justify-center mt-4 flex-col items-center md:flex-row md:justify-start gap-x-5">
                    <h1 className="text-yellow-300 text-2xl hover:text-yellow-300">
                      {user?.superXP} XP
                    </h1>
                    <h1 className="text-yellow-300 text-2xl hover:text-yellow-300">
                      {user?.walletAddress.slice(0, 4) +
                        "...." +
                        user?.walletAddress.slice(
                          user?.walletAddress.length - 4,
                          user?.walletAddress.length
                        )}
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
      )}
    </>
  );
};
export default Id;
