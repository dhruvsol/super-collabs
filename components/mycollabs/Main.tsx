import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Offer } from "./offer";
import { Request } from "./request";

import { Groups } from "./groups";
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
export const Main = () => {
  const Tab = useAppSelector((state) => state.Counter.value);
  let active;
  if (Tab === 0) {
    return (active = <Offer />);
  } else if (Tab === 1) {
    return (active = <Request />);
  } else if (Tab === 2) {
    return (active = <Groups />);
  }

  return <>{active}</>;
};
