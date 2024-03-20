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