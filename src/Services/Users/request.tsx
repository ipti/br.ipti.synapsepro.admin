import { CreateUser } from "../../Context/Users/type";
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
  

  export const requestCreateUsers = (data: CreateUser) => {
    let path = "/user-bff";
  
    return http
      .post(path, data)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  };
  