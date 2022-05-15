import { Allcollabcard } from "../../components/allcollabcard";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { Navbar } from "../../components/navbar";
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

const Allcollabs: NextPage = ({
  allcollab,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          <div className="md:grid md:grid-cols-2 pt-10 ">
            {allcollab.results.map((props: collab) => {
              const { title, description, id } = props;
              return (
                <>
                  <div key="1">
                    <Allcollabcard title={title} description={description} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(
    "https://intense-mesa-39554.herokuapp.com/v1/collabs?&status=open"
  );
  const allcollab: allcollabs = await data.json();
  return { props: { allcollab } };
};
export default Allcollabs;
