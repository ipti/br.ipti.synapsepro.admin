import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { idProject, idUser, login, logout, menuItem } from "../localstorage";
import { LoginRequest } from "./request";
import { LoginTypes } from "./types";

export const LoginController = ({setError}: {setError: any, }) => {
    const history = useNavigate();

    const LoginRequestMutation  = useMutation(
        (data: LoginTypes) => LoginRequest(data),
        {
          onError: (error: any) => {
            console.log(error.response.data.message);
            setError(error.response.data.message)          
          },
          onSuccess: (data) => {
            logout()
            console.log(data.data.access_token)
            login(data.data.access_token);
            idUser(data.data.user.id)
            idProject(data.data.user.schools[0].inep_id)
            console.log(data)
            history("/");
            menuItem("1")
            window.location.reload()
          },
        
        }
      );

    return{
        LoginRequestMutation
    }
}