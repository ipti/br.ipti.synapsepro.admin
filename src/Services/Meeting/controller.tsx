import { useMutation } from "react-query";
import { CreateFouls, CreateMeeting, EditMeeting } from "../../Context/Classroom/Meeting/Create/type";
import { requestArchivesMeeting, requestCreateMeeting, requestUpdateFouls, requestUpdateMeeting } from "./request";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { useNavigate, useParams } from "react-router-dom";
import queryClient from "../reactquery";

export const MeetingController = () => {

    const history = useNavigate()
    const {id}= useParams()
    const requestCreateMeetingMutation = useMutation(
        (data: CreateMeeting) => requestCreateMeeting(data),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Encontro criado com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history(`/turma/${id}/encontros`)
                    }
                })
            },
        }
    )

    const  requestArchvesMeetingMutation= useMutation(
        ({data, id}:{data: FormData, id: number}) => requestArchivesMeeting(data, id),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Encontro Alterado com sucesso!',
                //     confirmButtonColor: styles.colors.colorsBaseProductNormal,
                // }).then((result) => {
                //     if (result.isConfirmed) {
                //         queryClient.refetchQueries("useRequestsMeetingOne")
                //     }
                // })
                queryClient.refetchQueries("useRequestsMeetingOne")
            },
        }
    )

    const requestUpdateMeetingMutation = useMutation(
        ({data, id}:{data: EditMeeting, id: number}) => requestUpdateMeeting(data, id),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Encontro Alterado com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        queryClient.refetchQueries("useRequestsMeetingOne")
                    }
                })
            },
        }
    )

    const requestCreateFoulsMutation = useMutation(
        (data: CreateFouls) => requestUpdateFouls(data),
        {
            onError: (error: any) => {
                alert(error?.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Faltas registradas com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        queryClient.refetchQueries("useRequestsMeetingOne")
                    }
                })
            },
        }
    )

    return {
        requestCreateMeetingMutation, requestUpdateMeetingMutation, requestCreateFoulsMutation, requestArchvesMeetingMutation
    }
}

