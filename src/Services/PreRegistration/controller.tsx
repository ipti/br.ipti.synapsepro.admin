import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import styles from "../../Styles";
import { requestPreRegistration } from "./request";
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

    
    return { requestPreRegistrationMutation}
} 