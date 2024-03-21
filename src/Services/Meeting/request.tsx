import { CreateMeeting } from "../../Context/Classroom/Meeting/Create/type";
import http from "../axios";
import { logout } from "../localstorage";

export const requestCreateMeeting = (data: CreateMeeting) => {
    return http
        .post("/meeting", { ...data, users: data.users?.id })
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout();
                window.location.reload();
            }
            alert(err.response.message);
            throw err;
        });
}


export const requestMeetingList = async (id: string) => {
    if (id) {
      return await http
        .get("/meeting-bff", { params: { idClassroom : id } })
        .then((response) => response.data)
        .catch((err) => {
          // if(err.response.status === 401){
          //   logout()
          //   window.location.reload()
          // }
          throw err;
        });
    }
  };

  export const requestMeetingOne = async (id: string) => {
    if (id) {
      return await http
        .get("/meeting-bff/one", { params: { idMeeting  : id } })
        .then((response) => response.data)
        .catch((err) => {
          // if(err.response.status === 401){
          //   logout()
          //   window.location.reload()
          // }
          throw err;
        });
    }
  };