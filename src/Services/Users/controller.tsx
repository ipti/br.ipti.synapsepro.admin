import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../Context/Users/type";
import { requestCreateUsers } from "./request";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../Styles";

export const ControllerUser = () => {
    const history = useNavigate();
    const requestUserMutation = useMutation(
      (data: CreateUser) => requestCreateUsers(data),
      {
        onError: (error) => {},
        onSuccess: (data) => {
          Swal.fire({
            icon: "success",
            title: "Registro feito com sucesso!",
            confirmButtonColor: styles.colors.colorsBaseProductNormal,
          }).then((result) => {
            if (result.isConfirmed) {
              history("/");
            }
          });
        },
      }
    );
  
    return { requestUserMutation };
  };