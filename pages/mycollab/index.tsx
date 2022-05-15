import React from "react";
import { Navbar } from "../../components/navbar";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeTab } from "../../features/counter";
import { Offer } from "../../components/mycollabs/offer";
const Mycollab = () => {
  const tab = useAppSelector((state) => state.Counter.value);
  const dispatch = useAppDispatch();
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
        <div className="relative border-b border-neutral-700">
          <div className="md:px-10 pt-5  flex justify-center flex-wrap md:justify-between items-center">
            <ul className="flex justify-center py-3 md:justify-start gap-x-4">
              <li
                onClick={() => dispatch(changeTab(0))}
                className={`cursor-pointer  font-bold hover:text-yellow-300 hover:border border ${
                  tab === 0
                    ? `border-yellow-300 text-yellow-300`
                    : `border-white text-white`
                }   hover:border-yellow-300 p-2 rounded-lg`}
              >
                Offers
              </li>
              <li
                onClick={() => dispatch(changeTab(1))}
                className={`cursor-pointer ${
                  tab === 1
                    ? `border-yellow-300 text-yellow-300`
                    : `border-white text-white`
                }
                 font-bold hover:text-yellow-300 hover:border border   hover:border-yellow-300 p-2 rounded-lg`}
              >
                Requested
              </li>
              <li
                onClick={() => dispatch(changeTab(2))}
                className={`cursor-pointer ${
                  tab === 2
                    ? `border-yellow-300 text-yellow-300`
                    : `border-white text-white`
                }
                 font-bold hover:text-yellow-300  border   hover:border-yellow-300 p-2 rounded-lg`}
              >
                Groups
              </li>
              <li
                onClick={() => dispatch(changeTab(3))}
                className={`cursor-pointer ${
                  tab === 3
                    ? `border-yellow-300 text-yellow-300`
                    : `border-white text-white`
                }
                 font-bold hover:text-yellow-300 hover:border border   hover:border-yellow-300 p-2 rounded-lg`}
              >
                My Offers
              </li>
            </ul>
            <div>
              <button className="cursor-pointer text-white font-bold hover:text-yellow-300 hover:border border border-white  hover:border-yellow-300 hover:scale-110 hover:drop-shadow-lg p-2 rounded-lg">
                Claim XP
              </button>
            </div>
          </div>
        </div>
        <Offer />
      </div>
    </>
  );
};
export default Mycollab;
