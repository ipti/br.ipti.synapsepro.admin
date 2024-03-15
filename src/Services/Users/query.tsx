import { useQuery } from "react-query";
import { requestUsers } from "./request";

export const useFetchRequestUsers = () => {
    return useQuery(["useRequestsUsers"], () => requestUsers());
  };
