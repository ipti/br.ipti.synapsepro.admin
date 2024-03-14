import { CreateClassroom } from "../../Context/Classroom/type";
import http from "../axios";
import { GetIdProject, getYear, logout } from "../localstorage";

export const requestCreateClassroom = (data: CreateClassroom) => {
  return http
    .post("/classroom", data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      alert(err.response.message)
      throw err;
    });
};


export const requestClassroom = () => {
  let path = "/classroom-bff";
  return http
    .get(path, {
      params: {
        idProject: GetIdProject(),
        year: getYear()
      }
    })
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};


export const requestClassroomOne = (id: number) => {
  let path = "/classroom/";
  return http
    .get(path + id)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestUpdateClassroom = (id: number, data: {name: string}) => {
  console.log(id, data)
  let path = "/classroom/";
  return http
    .put(path + id, data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestClassroomRegistration = (id: number) => {
  let path = "/registration-token-bff";
  return http
    .get(path, {
      params: {
        idClassroom: id
      }
    })
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestClassroomRegistrationOne = (id: number) => {
  let path = "/registration/"+id;
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