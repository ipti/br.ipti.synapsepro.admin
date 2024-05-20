import { useQuery } from "react-query";
import { requestAllRegistration } from "./request";

export const useFetchRequestAllRegistration = ({
    page,
    limite,
  }: {
    page: number;
    limite: number;
  }) => {
    return useQuery(["useRequestAllRegistration", page, limite], () => requestAllRegistration({limite: limite, page: page}));
};