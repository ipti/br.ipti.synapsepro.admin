import { useEffect, useState } from "react"
import { ControllerClassroom, ControllerUpdateClassroom } from "../../Services/Classroom/controller"
import { useFetchRequestClassroom } from "../../Services/Classroom/query"
import { CreateClassroom } from "./type"

export const ClassroomState = () => {
    const initialValue = {
        name: ""
    }

    const [classrooms, setClassrooms] = useState<any>();

    const { data: classroomsFetch } = useFetchRequestClassroom()

    const {requestUpdateClassroomMutation } = ControllerUpdateClassroom()

    const UpdateClassroom = (body: {name: string}, id: number) => {
        requestUpdateClassroomMutation.mutate({data: body, id: id})
    }


    useEffect(() => {
        if (classroomsFetch) {
            setClassrooms(classroomsFetch)
        }
    }, [classroomsFetch])

    const { requestCreateClassroomMutation } = ControllerClassroom()

    const CreateClassroom = (body: CreateClassroom) => {
        requestCreateClassroomMutation.mutate(body)
    }

    return { initialValue, CreateClassroom,classrooms, UpdateClassroom }
}