import { useQuery } from "react-query";
import { requestAllRegistration } from "./request";

export const useFetchRequestAllRegistration = ({
  page,
  limite,
  cpf,
  name,
}: {
  page: number;
  limite: number;
  name?: string;
  cpf?: string;
}) => {
  return useQuery(["useRequestAllRegistration", page, limite, cpf, name], () =>
    requestAllRegistration({ limite: limite, page: page, cpf: cpf, name: name })
  );
};
