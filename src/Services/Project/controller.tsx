import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { CreateProject } from "../../Context/Project/CreateList/type";
import { requestCreateProject } from "./request";

export const ProjectController = () => {

    const history = useNavigate()

    const requestCreateprojectMutation = useMutation(
        (data: CreateProject) => requestCreateProject(data),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Projeto criado com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history('/projetos')
                    }
                })
            },
        }
    );

    return{
        requestCreateprojectMutation
    }
}