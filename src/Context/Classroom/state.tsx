import { ControllerClassroom } from "../../Services/Classroom/controller"
import { CreateClassroom } from "./type"

export const ClassroomState = () => {
    const initialValue: CreateClassroom = {
        name: ""
    }

    const { requestCreateClassroomMutation } = ControllerClassroom()

    const CreateClassroom = (body: any) => {
        requestCreateClassroomMutation.mutate(body)
    }

    return { initialValue, CreateClassroom }
}