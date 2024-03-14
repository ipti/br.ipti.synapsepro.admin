import { useQuery } from "react-query";
import { requestClassroom, requestClassroomOne, requestClassroomRegistration, requestClassroomRegistrationOne } from "./request";

export const useFetchRequestClassroomOne = (id: number) => {
  return useQuery(["useRequestsClassroomOne", id], () => requestClassroomOne(id));
};

export const useFetchRequestClassroomRegistration = (id: number) => {
  return useQuery(["useRequestsClassroomRegistration", id], () => requestClassroomRegistration(id));
};
export const useFetchRequestClassroomRegistrationOne = (id: number) => {
  return useQuery(["useRequestsClassroomRegistrationOne", id], () => requestClassroomRegistrationOne(id));
};

export const useFetchRequestClassroom = () => {
  return useQuery(["useRequestsClassroom"],requestClassroom);
};