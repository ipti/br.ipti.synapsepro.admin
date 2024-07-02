import { useQuery } from "react-query";
import { requestUsers, requestUsersChart, requestUsersOne } from "./request";

export const useFetchRequestUsers = (role: string | undefined) => {
    return useQuery(["useRequestsUsers", role], () => requestUsers(role));
  };

  export const useFetchRequestUsersChart = () => {
    return useQuery(["useRequestsUsersChart"], () => requestUsersChart());
  };

  export const useFetchRequestUsersOne = (id: number) => {
    return useQuery(["useRequestsUsersOne"], () => requestUsersOne(id));
  };
