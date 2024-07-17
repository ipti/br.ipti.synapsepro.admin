import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { idUser, login, logout, menuItem } from "../localstorage";
import { LoginRequest, LoginSystemRequest } from "./request";
import { LoginTypes } from "./types";

export const LoginController = ({ setError }: { setError: any }) => {
  const history = useNavigate();

  const LoginRequestMutation = useMutation(
    (data: LoginTypes) => LoginRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorsBaseProductNormal,
        });
        setError(error.response.data.message);
      },
      onSuccess: (data) => {
        if (data.data?.student?.id) {
          Swal.fire({
            icon: "error",
            title: "Seu usuário não tem permissão para acessar o sistema.",
            confirmButtonColor: styles.colors.colorsBaseProductNormal,
          });
        } else {
          idUser(JSON.stringify(data.data));
          history("/");
          menuItem("1");
          window.location.reload();
        }
      },
    }
  );

  const LoginSystemRequestMutation = useMutation(
    (data: LoginTypes) => LoginSystemRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorsBaseProductNormal,
        });
        setError(error.response.data.message);
      },
      onSuccess: (data, variables) => {
        logout();
        login(data.data.token);

        LoginRequestMutation.mutate({
          user_name: variables.user_name,
          password: variables.password,
        });
      },
    }
  );

  return {
    LoginRequestMutation,
    LoginSystemRequestMutation,
  };
};
