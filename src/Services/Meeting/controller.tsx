import { useMutation } from "react-query";
import { CreateMeeting } from "../../Context/Classroom/Meeting/Create/type";
import { requestCreateMeeting } from "./request";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { useNavigate } from "react-router-dom";

export const MeetingController = () => {

    const history = useNavigate()
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
                        history('/turma')
                    }
                })
            },
        }
    )

    return {
        requestCreateMeetingMutation
    }
}

