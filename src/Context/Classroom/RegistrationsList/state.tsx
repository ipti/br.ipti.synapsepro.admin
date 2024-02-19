import { useEffect, useState } from "react";
import json from "../../../Data/students.json";
import { RegistrationType } from "./type";
export const RegistrationClassroomState = () => {
  
    const [registrations, setregistrations] = useState<Array<any> | undefined>();


    useEffect(() => {
        setregistrations(json)
    }, [])


    return {registrations  }
}