import { CreateUser } from "../../Context/Users/type";
import http from "../axios";
import { logout } from "../localstorage";

export const requestUsers = () => {
  let path = "/user-bff";

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
    .post(path, {...data, role: data.role?.id})
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};


export const requestDeleteUsers = (id: number) => {
  let path = "/users/" + id;
  return http
    .delete(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestUpdateUsers = (id: number, data: any) => {
  let path = "/users/" + id;
  return http
    .put(path, data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestUsersOne = (id: number) => {
  let path = "/users/" + id;
  return http
    .put(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};