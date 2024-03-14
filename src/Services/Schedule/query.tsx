import { useQuery } from "react-query";
import { requestSchecule, requestScheduleOne } from "./request";

export const useFetchRequestSchecule = () => {
    return useQuery(["useRequestsSchecule"], () => requestSchecule());
  };

  export const useFetchRequestScheculeOne = (id: number) => {
    return useQuery(["useRequestsScheculeOne"], () => requestScheduleOne(id));
  };