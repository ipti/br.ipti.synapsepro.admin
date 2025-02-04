import http from "../axios";
import { GetIdTs, logout } from "../localstorage";

export const requestAllRegistration = () => {
 

  let path =
    "/school/students/" + GetIdTs();
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
