import { useEffect, useState } from "react"
export const registrationstate = () => {
  
    const [registrations, setregistrations] = useState();


    useEffect(() => {
        if (registrationsFetch) {
            setregistrations(registrationsFetch)
        }
    }, [registrationsFetch])

    const { requestCreateClassroomMutation } = ControllerClassroom()

    const CreateClassroom = (body: any) => {
        requestCreateClassroomMutation.mutate(body)
    }

    return { initialValue, CreateClassroom,registrations }
}