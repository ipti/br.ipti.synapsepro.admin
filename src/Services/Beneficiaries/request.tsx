import http from "../axios";
import { logout } from "../localstorage";

export const requestAllRegistration = () => {
    let path = "/registration-token-bff/registration-all?name=jon";
    return http
      .get(path)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  };