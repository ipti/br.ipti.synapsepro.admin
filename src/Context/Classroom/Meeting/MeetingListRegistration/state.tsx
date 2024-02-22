import { useEffect, useState } from "react";
import json from "../../../../Data/students.json";
export const MeetingListRegistrationState = () => {
  
    const [registrations, setregistrations] = useState<Array<any> | undefined>();


    useEffect(() => {
        setregistrations(json)
    }, [])


    return {registrations  }
}