import http from "../axios";
import { GetIdTs, logout } from "../localstorage";

export const requestAllRegistration = ({
  page,
  limite,
  cpf,
  name,
  allFilter
}: {
  page: number;
  limite: number;
  name?: string,
  cpf?: string,
  allFilter?: string
}) => {
  const nameFilter = name ? "&nameFilter=" + name : ""
  const cpfFilter = cpf ? "&cpfFilter=" + cpf : ""
  const allFilterRequest = allFilter ? "&allFilter=" + allFilter : ""

  let path =
    "/registration-token-bff/registration-all?page=" +
    page +
    "&limit=" +
    limite + "&idTs="+ GetIdTs() + nameFilter + cpfFilter + allFilterRequest;
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
