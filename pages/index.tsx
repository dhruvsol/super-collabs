import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useAppDispatch } from "../store/hooks";
import { setAddress } from "../features/counter";
const Home: NextPage = () => {
  const router = useRouter();
  const [isPhantom, setIsPhantom] = useState(false);
  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    user,
    logout,
    isLoggingOut,
  } = useMoralis();
  // console.log(isAuthenticated);
  const dispatch = useAppDispatch();
  const storeUserId = async () => {
    if (isAuthenticated) {
      const res = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/users?walletAddress=${user?.attributes.solAddress}`
      );
      const data = await res.json();
      const result = data.results[0].id;
      localStorage.setItem("currentUser", result);
      dispatch(setAddress(result));
    } else {
      router.push("/");
    }
  };
  const removeUserId = async (): Promise<void> => {
    localStorage.removeItem("currentUser");
  };
  useEffect(() => {
    if (user != null) {
      storeUserId();
    }
  });
  return (
    <>
      <div className="bg-white relative min-h-screen">
        <div className="absolute inset-0 min-h-screen -skew-y-12 transform  origin-top-left">
          <div className=" grid grid-cols-10 grid-rows-6  min-h-screen transform ">
            <div className="bg-yellow-300 opacity-30 row-start-2 col-span-2"></div>
            <div className="bg-yellow-400 opacity-30 row-start-4 col-span-2"></div>
            <div className="bg-yellow-300 opacity-30 col-start-9 row-start-6 col-span-2"></div>
            <div className="bg-yellow-400 opacity-30 row-start-3 col-start-9 col-span-2"></div>
            <div className="bg-yellow-400 opacity-30 row-start-4 col-start-8 col-span-1"></div>
            <div className="bg-yellow-500 opacity-30 col-start-3 row-start-5 col-span-1"></div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col min-h-screen ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
            Super Collabs
          </h1>
          <p className="pt-2  md:text-2xl lg:text-3xl ">
            Start with your collabration
          </p>
          {isAuthenticated ? (
            <button
              onClick={() => router.push("/collabs")}
              className="mt-5 p-2 rounded-lg bg-yellow-400  cursor-pointer z-10 hover:scale-110 hover:font-semibold lg:p-3 lg:mt-8 "
            >
              Get Started
            </button>
          ) : (
            <button
              onLoad={() => {
                removeUserId();
              }}
              onClick={() => authenticate({ type: "sol" })}
              className="mt-5 p-2 rounded-lg bg-yellow-400  cursor-pointer z-10 hover:scale-110 hover:font-semibold lg:p-3 lg:mt-8 "
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
