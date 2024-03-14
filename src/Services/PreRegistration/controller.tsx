import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { UpdateRegister } from "../../Context/Classroom/Registration/type";
import styles from "../../Styles";
import { requestPreRegistration, requestUpdateRegistration } from "./request";
import { CreatePreRegistration } from "./types";


export const ControllerPreRegistration = () => {
    const history = useNavigate()
    const requestPreRegistrationMutation = useMutation(
        (data: CreatePreRegistration) => requestPreRegistration(data),
        {
            onError: (error) => {
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro feito com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history('/')
                    }
                })

            },
        }
    );

    
    return { requestPreRegistrationMutation}
} 


export const ControllerUpdateRegistration = () => {
    const requestPreRegistrationMutation = useMutation(
        ({data, id}: {data: UpdateRegister, id: number}) => requestUpdateRegistration(data, id),
        {
            onError: (error) => {
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Alteração realizada com sucesso!',
                    confirmButtonColor: styles.colors.colorsBaseProductNormal,
                })

            },
        }
    );

    
    return { requestPreRegistrationMutation}
} 
