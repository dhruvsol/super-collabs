import { Offercard } from "./cards/offercard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
type collaborators = {
  status: string;
  commitHours: number;
  collab: string;
  user: string;
  note: string;
  id: string;
};

type offerCollaborators = {
  results: Array<collaborators>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
};
export const Offer = ({
  offerCollaborators,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log(offerCollaborators);

  return <>{/* <Offercard /> */}</>;
};
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(
    "https://intense-mesa-39554.herokuapp.com/v1/collaborators/62303d89a51798256081cc02"
  );
  const offerCollaborators: offerCollaborators = await data.json();
  return { props: { offerCollaborators } };
};
