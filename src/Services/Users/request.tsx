import http from "../axios";
import { logout } from "../localstorage";

export const requestUsers = () => {
    let path = "/users";
  
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
  