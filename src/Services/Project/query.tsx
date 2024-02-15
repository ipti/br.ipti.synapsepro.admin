import { useQuery } from "react-query";
import { requestProjectList } from "./request";

export const useFetchRequestProjectList = () => {
    return useQuery(["useRequestProjectList"], () => requestProjectList());
};