import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestClassroomRegistration } from "../../../Services/Classroom/query";
import { RegistrationType } from "./type";
export const RegistrationClassroomState = () => {
    const {id} = useParams()
    const {data: registrationsRequeset} = useFetchRequestClassroomRegistration(parseInt(id!))
    const [registrations, setregistrations] = useState<Array<RegistrationType> | undefined>();

    useEffect(() => {
        if(registrationsRequeset){
            setregistrations(registrationsRequeset)
        }
    }, [registrationsRequeset])


    return {registrations  }
}