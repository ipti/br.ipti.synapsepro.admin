import { useQuery } from "react-query";
import { requestUsers, requestUsersOne } from "./request";

export const useFetchRequestUsers = () => {
    return useQuery(["useRequestsUsers"], () => requestUsers());
  };

  export const useFetchRequestUsersOne = (id: number) => {
    return useQuery(["useRequestsUsersOne"], () => requestUsersOne(id));
  };
