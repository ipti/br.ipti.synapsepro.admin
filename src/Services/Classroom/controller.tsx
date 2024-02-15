import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { requestCreateClassroom } from "./request";


export const ControllerClassroom = () => {
    const history = useNavigate()
    const requestCreateClassroomMutation = useMutation(
        (data) => requestCreateClassroom(data),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Turma criada com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history('/turmas')
                    }
                })
            },
        }
    );

    // const requestDeleteScheduleMutation = useMutation(
    //     (data: any) => requestDeleteSchedule(data),
    //     {
    //         onError: (error) => {
    //         },
    //         onSuccess: (data) => {
    //             refetch()
    //         },
    //     }
    // );
    return { requestCreateClassroomMutation }
} 