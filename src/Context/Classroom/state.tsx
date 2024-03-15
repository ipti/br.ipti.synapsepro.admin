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

    const { requestCreateClassroomMutation, requestDeleteClassroomMutation, requestUpdateClassroomMutation } = ControllerClassroom()

    const UpdateClassroom = (body: {name: string}, id: number) => {
        requestUpdateClassroomMutation.mutate({data: body, id: id})
    }


    useEffect(() => {
        if (classroomsFetch) {
            setClassrooms(classroomsFetch)
        }
    }, [classroomsFetch])


    const CreateClassroom = (body: CreateClassroom) => {
        requestCreateClassroomMutation.mutate(body)
    }

    const DeleteClassroom = (id: number) => {
        requestDeleteClassroomMutation.mutate(id)
    }

    return { initialValue, CreateClassroom,classrooms, UpdateClassroom, DeleteClassroom }
}