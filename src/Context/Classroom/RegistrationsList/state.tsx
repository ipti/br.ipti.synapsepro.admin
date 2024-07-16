import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ControllerUpdateRegistration } from "../../../Services/PreRegistration/controller";
import { useFetchRequestClassroomRegistration } from "../../../Services/PreRegistration/query";
import { Root } from "./type";
export const RegistrationClassroomState = () => {
    const {id} = useParams()
    const {data: registrationsRequeset, isLoading} = useFetchRequestClassroomRegistration(parseInt(id!))
    const {requestDeleteRegistrationClassroomMutation} = ControllerUpdateRegistration()

    const DeleteRegistration = (id: number) => {
        requestDeleteRegistrationClassroomMutation.mutate(id)
    }

    const [registrations, setregistrations] = useState<Root | undefined>();

    useEffect(() => {
        if(registrationsRequeset){
            setregistrations(registrationsRequeset)
        }
    }, [registrationsRequeset])


    return {registrations, DeleteRegistration, isLoading }
}