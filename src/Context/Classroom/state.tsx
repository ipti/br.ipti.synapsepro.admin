import { useEffect, useState } from "react"
import { ControllerClassroom } from "../../Services/Classroom/controller"
import { useFetchRequestClassroom } from "../../Services/Classroom/query"
import { CreateClassroom } from "./type"

export const ClassroomState = () => {
    const initialValue = {
        name: ""
    }

    const [classrooms, setClassrooms] = useState<any>();

    const { data: classroomsFetch } = useFetchRequestClassroom()

    useEffect(() => {
        if (classroomsFetch) {
            setClassrooms(classroomsFetch)
        }
    }, [classroomsFetch])

    const { requestCreateClassroomMutation } = ControllerClassroom()

    const CreateClassroom = (body: CreateClassroom) => {
        requestCreateClassroomMutation.mutate(body)
    }

    return { initialValue, CreateClassroom,classrooms }
}