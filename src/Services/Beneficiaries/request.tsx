import http from "../axios";
import { logout } from "../localstorage";

export const requestAllRegistration = ({
  page,
  limite,
}: {
  page: number;
  limite: number;
}) => {
  let path =
    "/registration-token-bff/registration-all?page=" +
    page +
    "&limit=" +
    limite;
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
