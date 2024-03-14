import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { requestCreateClassroom, requestUpdateClassroom } from "./request";
import { CreateClassroom } from "../../Context/Classroom/type";
import queryClient from "../reactquery";


export const ControllerClassroom = () => {
    const history = useNavigate()
    const requestCreateClassroomMutation = useMutation(
        (data: CreateClassroom) => requestCreateClassroom(data),
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



export const ControllerUpdateClassroom = () => {
    const requestUpdateClassroomMutation = useMutation(
        ({ data, id }: { data: { name: string }, id: number }) => requestUpdateClassroom(id, data),
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
                        queryClient.refetchQueries("useRequestsClassroomOne")
                        // history('/turmas')
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
    return { requestUpdateClassroomMutation }
} 