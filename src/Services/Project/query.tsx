import { useQuery } from "react-query";
import { requestProjectList, requestTsList } from "./request";

export const useFetchRequestProjectLists = () => {
    return useQuery(["useRequestProjectList"], () => requestProjectList());
};

export const useFetchRequestTsLists = (id: number | undefined) => {
    return useQuery(["requestTsList", id], () => requestTsList(id));
};