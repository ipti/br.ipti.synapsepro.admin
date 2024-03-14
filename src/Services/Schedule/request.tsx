import { CreateSchedule } from "../../Context/Schedule/type";
import http from "../axios";
import { GetIdProject, getYear, logout } from "../localstorage";

export const requestSaveEventPre = (data: CreateSchedule) => {
  return http
    .post("/event_registration", { ...data, year: data.year.getFullYear() })
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

export const requestSchecule = () => {
  let path = "/event-registration-bff";

  return http
    .get(path, {
      params: {
        year: getYear(),
        idProject: GetIdProject()
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

export const requestDeleteSchedule = (id: number) => {
  let path = "/event_registration/" + id;
  return http
    .delete(path)
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

export const requestScheduleOne = (id: number) => {
  let path = "/event_registration/" + id;
  if (id) {
    return http
      .get(path)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        alert(err.response.message)
        throw err;
      });
  }
};

export const requestUpdateSchedule = (id: number, data: any) => {
  let path = "/event_registration/" + id;
  return http
    .put(path, data)
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