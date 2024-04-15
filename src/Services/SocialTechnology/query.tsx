import { useQuery } from "react-query";
import { requestSocialTechnologytList } from "./request";

export const useFetchRequestSocialTechnologyLists = () => {
    return useQuery(["useRequestSocialTechnologyList"], () => requestSocialTechnologytList());
};