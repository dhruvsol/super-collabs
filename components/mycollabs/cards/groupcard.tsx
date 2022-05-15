import React from "react";

export const Groupcard = () => {
  return (
    <>
      <div className="w-full flex justify-center py-8  relative ">
        <div className="bg-white  w-5/6 h-96  rounded-lg md:h-56 drop-shadow-2xl ">
          <div className="flex flex-col justify-evenly items-center h-full px-4 md:place-items-start ">
            <h1 className="font-bold text-2xl text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="font-normal text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              alias, minima illum tenetur sed quae dicta totam at ullam officia?
            </p>
            <hr className="bg-black  w-full " />
            <div className="flex justify-center md:justify-end w-full gap-x-10">
              <button className="mt-5 py-2 px-4 rounded-lg border text-green-500 border-green-500 hover:bg-green-500 hover:text-black  cursor-pointer   hover:font-semibold lg:p-2 lg:px-4 lg:mt-0">
                Done
              </button>
              <button className="mt-5 py-2 px-4 rounded-lg border text-red-500 border-red-500 hover:text-black hover:bg-red-500  cursor-pointer   hover:font-semibold lg:p-2 lg:px-4 lg:mt-0">
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
