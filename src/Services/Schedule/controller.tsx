import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { requestDeleteSchedule, requestSaveEventPre, requestUpdateSchedule } from "./request";
import { useFetchRequestSchecule } from "./query";
import styles from "../../Styles";
import { CreateSchedule } from "../../Context/Schedule/type";


export const ControllerSchedule = () => {
    const { data: schedules, isLoading: isLoadingSchedules, isError, refetch } = useFetchRequestSchecule();
    const history = useNavigate()
    const requestSaveEventPreMutation = useMutation(
        (data: CreateSchedule) => requestSaveEventPre(data),
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

    const requestUpdateEventPreMutation = useMutation(
        ({ data, id }: { data: any, id: number }) => requestUpdateSchedule!(id, data),
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
        (id: number) => requestDeleteSchedule(id),
        {
            onError: (error) => {
            },
            onSuccess: (data) => {
                refetch()
            },
        }
    );
    return { requestSaveEventPreMutation, requestDeleteScheduleMutation, schedules, isLoadingSchedules, isError, requestUpdateEventPreMutation }
} 