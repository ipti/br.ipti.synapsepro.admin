import http from "../axios";
import { GetIdUser } from "../localstorage";

export const requestSocialTechnologytList = async () => {
  if (GetIdUser()) {
    return await http
      .get("/social-technology-bff/user", { params: { userId: GetIdUser() } })
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
