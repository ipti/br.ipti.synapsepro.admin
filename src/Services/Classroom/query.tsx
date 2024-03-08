import { useQuery } from "react-query";
import { requestClassroom, requestClassroomOne } from "./request";

export const useFetchRequestClassroomOne = (id: number) => {
  return useQuery(["useRequestsClassroomOne", id], () => requestClassroomOne(id));
};

export const useFetchRequestClassroom = () => {
  return useQuery(["useRequestsClassroom"],requestClassroom);
};