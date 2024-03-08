import { CreateSchedule } from "../../Context/Schedule/type";
import http from "../axios";
import { GetIdProject, logout } from "../localstorage";

export const requestSaveEventPre = (data: CreateSchedule) => {
    return http
      .post("/event-pre-registration", data)
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        alert(err.response.message)
  
        throw err;
      });
  };

  export const requestSchecule = () => {
    let path = "/event-pre-registration";
  
    return http
      .get(path, {
        params: {
          school_inep_id_fk: GetIdProject(),
        }
      })
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        throw err;
      });
  };
  
  export const requestDeleteSchedule = (id: number) => {
    let path = "/event-pre-registration/" + id;
    return http
      .delete(path)
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        alert(err.response.message)
  
        throw err;
      });
  };