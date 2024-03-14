import { UpdateRegister } from "../../Context/Classroom/Registration/type";
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


export const requestUpdateRegistration = (data: UpdateRegister, id: number) => {
    console.log(data)
    return http
        .put("/registration/" + id, {...data, color_race: data.color_race?.id, sex: data.sex?.id, deficiency: data.deficiency.id})
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