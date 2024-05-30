import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { CreateProject, UpdateProject } from "../../Context/Project/CreateList/type";
import { requestCreateProject, requestUpdateProject } from "./request";
import queryClient from "../reactquery";

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

    const requestUpdateprojectMutation = useMutation(
        ({data, id}:{data: UpdateProject, id: number}) => requestUpdateProject(data, id),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Projeto editado com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        queryClient.refetchQueries("requestProjectOne");
                    }
                })
            },
        }
    );

    return{
        requestCreateprojectMutation, requestUpdateprojectMutation
    }
}