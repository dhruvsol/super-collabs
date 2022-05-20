const index = () => {
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
              <h1 className="flex justify-center items-center text-xl py-2 font-semibold ">
                Claim Your XP
              </h1>
              <div className="flex justify-center flex-col gap-y-4">
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 ">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Hours
                  </label>
                  <input
                    type="text"
                    className="block w-full border-0 p-0 text-black  focus:ring-0 sm:text-sm focus-visible:outline-none lg:text-xl"
                    placeholder="Invested Hours"
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 ">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Collab
                  </label>
                  <input
                    type="text"
                    className=" resize-none lg:text-xl block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                    placeholder="search collab"
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Links
                  </label>
                  <textarea
                    className=" lg:text-xl resize-none block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                    name="implinks"
                    id="implinks"
                    rows={3}
                    placeholder="Important Links"
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                  >
                    Your contribution
                  </label>
                  <textarea
                    className=" lg:text-xl resize-none block w-full border-0 p-0 text-black placeholder-gray-500 focus:ring-0 sm:text-sm focus-visible:outline-none"
                    name="contribution"
                    id="contribution"
                    rows={3}
                    placeholder="Your Contribution"
                  />
                </div>
                <div className="flex justify-between">
                  <button className="py-2 px-4 rounded-lg  border-2  border-yellow-300 hover:bg-yellow-300 hover:font-bold">
                    Cancel
                  </button>
                  <button className="py-2 px-6 rounded-lg border-2 border-yellow-300 bg-yellow-300 hover:scale-105 hover:font-bold">
                    Send
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
export default index;
