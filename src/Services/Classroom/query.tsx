import { useQuery } from "react-query";
import { requestClassroom } from "./request";

export const useFetchRequestClassroom = (id: number) => {
    return useQuery(["useRequestsSchecule", id], () => requestClassroom(id));
  };