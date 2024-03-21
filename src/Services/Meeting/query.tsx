import { useQuery } from "react-query";
import { requestMeetingList, requestMeetingOne } from "./request";

export const useFetchRequestMeetingList = (id: string) => {
    return useQuery(["useRequestsMeetingList", id], () => requestMeetingList(id));
  };

  export const useFetchRequestMeetingOne = (id: string) => {
    return useQuery(["useRequestsMeetingOne", id], () => requestMeetingOne(id));
  };
  