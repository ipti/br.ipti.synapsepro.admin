import http from "../axios";
import { logout } from "../localstorage";

export const requestCreateClassroom = (data: any) => {
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


  export const requestClassroom = (id: number) => {
    let path = "/classroom";
    return http
      .get(path, {
        params: {
          where: {
            school_year: 2024
          },
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
    let path = "/classroom";
    return http
      .get(path + id, {
        params: {
          include: {
            student_pre_identification: true
          },
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