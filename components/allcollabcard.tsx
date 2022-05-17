import { useRouter } from "next/router";

interface collab {
  title: string;
  description: string;
  id: string;
}
export const Allcollabcard = (collab: collab) => {
  // console.log(collab);
  const { title, description, id } = collab;
  const router = useRouter();

  return (
    <>
      <div className="w-full flex justify-center py-8  ">
        <div className="bg-stone-100 hover:scale-105 w-5/6 h-96  rounded-lg md:h-56  ">
          <div className="flex flex-col justify-evenly items-center h-full px-4 md:place-items-start ">
            <h1 className="font-bold text-2xl text-center md:text-left">
              {title}
            </h1>
            <p className="font-normal text-lg text-center md:text-left">
              {description}
            </p>
            <hr className="bg-black  w-full " />
            <button
              onClick={() => router.push(`/collabs/${id}`)}
              className="mt-5 py-2 px-3   rounded-lg bg-yellow-400  cursor-pointer  hover:scale-110 hover:font-semibold lg:p-3 lg:mt-0"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
