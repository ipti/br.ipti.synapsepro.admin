import { useMutation } from "react-query";
import { CreateFouls, CreateMeeting, EditMeeting } from "../../Context/Classroom/Meeting/Create/type";
import { requestCreateMeeting, requestUpdateFouls, requestUpdateMeeting } from "./request";
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
                    title: 'Turma criada com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history(`/turma/${id}/encontros`)
                    }
                })
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
                    title: 'Turma criada com sucesso!',
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
                    title: 'Turma criada com sucesso!',
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
        requestCreateMeetingMutation, requestUpdateMeetingMutation, requestCreateFoulsMutation
    }
}

