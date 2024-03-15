import http from "../axios";

export const requestProjectList = async () => {
    return await http
      .get("/project")
      .then(response => response.data)
      .catch(err => {
        // if(err.response.status === 401){
        //   logout()
        //   window.location.reload()
        // }
  
        throw err;
      });
  };