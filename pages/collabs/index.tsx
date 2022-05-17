import { Allcollabcard } from "../../components/allcollabcard";
import { NextPage } from "next";
import { Navbar } from "../../components/navbar";
import { useEffect, useState } from "react";
type collab = {
  skills: Array<any>;
  status: string;
  members: Array<string>;
  createdBy: string;
  description: string;
  title: string;
  id: string;
};
type allcollabs = {
  results: Array<collab>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
};

const Allcollabs: NextPage = () => {
  const [allcollabs, setAllcollabs] = useState<allcollabs>();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchData = async () => {
      if (page < 1) {
        setPage(1);
      }
      const userData = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/collabs?&status=open&page=${page}`
      );
      const currentUserInfo = await userData.json();
      setAllcollabs(currentUserInfo);
      if (page > allcollabs?.totalPages!) {
        setPage(allcollabs?.totalPages!);
      }
    };
    fetchData();
  }, [page]);
  const range = (start: number | undefined, end: number | undefined) => {
    let length = end! - start! + 1;
    return Array.from({ length }, (_, idx) => idx + start!);
  };
  const EmptyState = (value: number) => {
    setAllcollabs(undefined);
    setPage(value);
  };

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
        <div className="flex py-5 items-center flex-col min-h-screen relative ">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl xl:text-7xl ">
            All Collabs
          </h1>
          {/* <div className="w-full flex justify-end"></div> */}
          <div className="md:grid md:grid-cols-2 pt-10 w-full ">
            {allcollabs?.results.map((props: collab) => {
              const { title, description, id } = props;
              return (
                <>
                  <div key="1">
                    <Allcollabcard
                      title={title}
                      description={description}
                      id={id}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center text-white gap-8 items-center py-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPage(page - 1)}
              className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {range(1, allcollabs?.totalPages).map((value, index) => {
              return (
                <>
                  <h1
                    key={index}
                    onClick={() => {
                      EmptyState(value);
                    }}
                    className="cursor-pointer hover:text-blue-button"
                  >
                    {value}
                  </h1>
                </>
              );
            })}
            {/* <h1 className="cursor-pointer hover:text-blue-button">1</h1> */}

            <svg
              onClick={() => setPage(page + 1)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:text-yellow-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allcollabs;
