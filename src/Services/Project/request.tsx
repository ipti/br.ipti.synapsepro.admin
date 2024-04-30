import http from "../axios";
import { GetIdProject, GetIdUser } from "../localstorage";

export const requestProjectList = async () => {
  if (GetIdUser()) {
    return await http
      .get("/project-user-bff", { params: { userId: GetIdUser() } })
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

export const requestTsList = async () => {
  if (GetIdUser()) {
    return await http
      .get("/social-technology-bff/one", { params: { stId: GetIdProject() } })
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

