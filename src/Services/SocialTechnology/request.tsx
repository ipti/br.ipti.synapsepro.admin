import http from "../axios";
import { GetIdUser } from "../localstorage";

export const requestSocialTechnologytList = async () => {
  console.log(GetIdUser())
  if (false) {
    return await http
      .get("/user/teacher-school/" + GetIdUser().id)
      .then((response) => response.data)
      .catch((err) => {
        // if(err.response.status === 401){
        //   logout()
        //   window.location.reload()
        // }

        throw err;
      });
  }

  if (GetIdUser()) {
    return await http
      .get("/school")
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


export const requestSocialTechnologyOne = async () => {
  if (GetIdUser()) {
    return await http
      .get("/social-technology-bff/one", { params: { stId: GetIdUser() } })
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


export const requestCreateSocialTechnology = async (body: {name: string, uf: string}) => {
    return await http
      .post("/school", body)
      .then((response) => response.data)
      .catch((err) => {
        // if(err.response.status === 401){
        //   logout()
        //   window.location.reload()
        // }

        throw err;
      });
};