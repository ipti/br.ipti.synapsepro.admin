import { useQuery } from "react-query";
import { requestAllRegistration } from "./request";

export const useFetchRequestAllRegistration = ({
  page,
  limite,
  cpf,
  name,
  allFilter
}: {
  page: number;
  limite: number;
  name?: string;
  cpf?: string;
  allFilter?: string
}) => {
  return useQuery(["useRequestAllRegistration", page, limite, cpf, name, allFilter], () =>
    requestAllRegistration({ limite: limite, page: page, cpf: cpf, name: name, allFilter: allFilter })
  );
};
