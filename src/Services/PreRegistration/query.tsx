import { useQuery } from "react-query";
import { requestProjectsAndClassroom } from "./request";

export const useFetchRequestProjectList = () => {
    return useQuery(["useRequestProjectsAndClassroom"], () => requestProjectsAndClassroom());
};