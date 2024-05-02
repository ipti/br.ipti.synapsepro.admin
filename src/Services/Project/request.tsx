import http from "../axios";
import { GetIdTs, GetIdUser } from "../localstorage";

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
  if (GetIdTs()) {
    return await http
      .get("/social-technology-bff/one", { params: { stId: GetIdTs() } })
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

