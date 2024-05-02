import { useQuery } from "react-query";
import { requestProjectList, requestTsList } from "./request";

export const useFetchRequestProjectLists = () => {
    return useQuery(["useRequestProjectList"], () => requestProjectList());
};

export const useFetchRequestTsLists = () => {
    return useQuery(["requestTsList"], () => requestTsList());
};