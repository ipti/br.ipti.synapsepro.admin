import { useQuery } from "react-query";
import { requestAllRegistration } from "./request";

export const useFetchRequestAllRegistration = () => {
  return useQuery(["useRequestAllRegistration"], () =>
    requestAllRegistration()
  );
};
