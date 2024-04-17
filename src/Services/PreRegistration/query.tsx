import { useQuery } from "react-query";
import { requestClassroomRegistration, requestClassroomRegistrationOne, requestProjectsAndClassroom, requestRegistrationOneCpf } from "./request";

export const useFetchRequestProjectList = () => {
    return useQuery(["useRequestProjectsAndClassroom"], () => requestProjectsAndClassroom());
};

export const useFetchRequestClassroomRegistration = (id: number) => {
    return useQuery(["useRequestsClassroomRegistration", id], () => requestClassroomRegistration(id));
  };
  export const useFetchRequestClassroomRegistrationOne = (id: number) => {
    return useQuery(["useRequestsClassroomRegistrationOne", id], () => requestClassroomRegistrationOne(id));
  };

  export const useFetchRequestRegistrationOneCPF = (cpf?: string) => {
    return useQuery(["useRequestsRegistrationOneCPF", cpf], () => requestRegistrationOneCpf(cpf));
  };