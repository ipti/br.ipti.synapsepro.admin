import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { requestDeleteSchedule, requestSaveEventPre } from "./request";
import { useFetchRequestSchecule } from "./query";
import styles from "../../Styles";


export const ControllerSchedule = () => {
    const { data: schedules, isLoading: isLoadingSchedules, isError, refetch } = useFetchRequestSchecule();
    const history = useNavigate()
    const requestSaveEventPreMutation = useMutation(
        (data) => requestSaveEventPre(data),
        {
            onError: (error) => {
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cronograma criado com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history('/')
                    }
                })

            },
        }
    );

    const requestDeleteScheduleMutation = useMutation(
        (data: any) => requestDeleteSchedule(data),
        {
            onError: (error) => {
            },
            onSuccess: (data) => {
                refetch()
            },
        }
    );
    return { requestSaveEventPreMutation, requestDeleteScheduleMutation, schedules, isLoadingSchedules, isError }
} 