import http from "../axios";
import { CreatePreRegistration } from "./types";

export const requestPreRegistration = (data: CreatePreRegistration) => {
    return http
        .post("/registration-bff", data)
        .then(response => response.data)
        .catch(err => {
            if (err.response.status === 401) {
                window.location.reload()
            }
            alert(err.response.message)

            throw err;
        });
};

export const requestProjectsAndClassroom = () => {
    let path = "/project-bff";

    return http
        .get(path)
        .then(response => response.data)
        .catch(err => {
            if (err.response.status === 401) {
                window.location.reload()
            }
            throw err;
        });
};