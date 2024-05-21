import http from "../axios";
import { GetIdTs, logout } from "../localstorage";

export const requestAllRegistration = ({
  page,
  limite,
  cpf,
  name
}: {
  page: number;
  limite: number;
  name?: string,
  cpf?: string
}) => {
  const nameFilter = name ? "&nameFilter=" + name : ""
  const cpfFilter = cpf ? "&cpfFilter=" + cpf : ""

  let path =
    "/registration-token-bff/registration-all?page=" +
    page +
    "&limit=" +
    limite + "&idTs="+ GetIdTs() + nameFilter + cpfFilter;
  return http
    .get(path)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};
