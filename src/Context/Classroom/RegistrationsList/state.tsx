import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RegistrationType } from "./type";
import { useFetchRequestClassroomRegistration } from "../../../Services/PreRegistration/query";
import { ControllerUpdateRegistration } from "../../../Services/PreRegistration/controller";
export const RegistrationClassroomState = () => {
    const {id} = useParams()
    const {data: registrationsRequeset, isLoading} = useFetchRequestClassroomRegistration(parseInt(id!))
    const {requestDeleteRegistrationMutation} = ControllerUpdateRegistration()

    const DeleteRegistration = (id: number) => {
        requestDeleteRegistrationMutation.mutate(id)
    }

    const [registrations, setregistrations] = useState<Array<RegistrationType> | undefined>();

    useEffect(() => {
        if(registrationsRequeset){
            setregistrations(registrationsRequeset)
        }
    }, [registrationsRequeset])


    return {registrations, DeleteRegistration, isLoading }
}