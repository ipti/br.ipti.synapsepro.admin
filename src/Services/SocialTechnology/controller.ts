import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { requestCreateSocialTechnology } from "./request";
import queryClient from "../reactquery";

export const TechnologySocialController = () => {

    const history = useNavigate()

    const requestCreateprojectMutation = useMutation(
        (data: {name: string, uf: string}) => requestCreateSocialTechnology(data),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Escola criada com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    queryClient.refetchQueries("useRequestSocialTechnologyList")
                    if (result.isConfirmed) {
                        history('/escolas')
                    }
                })
            },
        }
    );

    return{
        requestCreateprojectMutation
    }
}