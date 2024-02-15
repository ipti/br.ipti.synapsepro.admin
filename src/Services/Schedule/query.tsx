import { useQuery } from "react-query";
import { requestSchecule } from "./request";

export const useFetchRequestSchecule = () => {
    return useQuery(["useRequestsSchecule"], () => requestSchecule());
  };