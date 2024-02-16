import { useEffect, useState } from "react"
import { ControllerClassroom } from "../../Services/Classroom/controller"
import { useFetchRequestClassroom } from "../../Services/Classroom/query"
import { GetIdProject } from "../../Services/localstorage"
import { CreateClassroom } from "./type"

export const ClassroomState = () => {
    const initialValue: CreateClassroom = {
        name: ""
    }

    const [classrooms, setClassrooms] = useState();

    const { data: classroomsFetch } = useFetchRequestClassroom(parseInt(GetIdProject()!))

    useEffect(() => {
        if (classroomsFetch) {
            setClassrooms(classroomsFetch)
        }
    }, [classroomsFetch])

    const { requestCreateClassroomMutation } = ControllerClassroom()

    const CreateClassroom = (body: any) => {
        requestCreateClassroomMutation.mutate(body)
    }

    return { initialValue, CreateClassroom,classrooms }
}