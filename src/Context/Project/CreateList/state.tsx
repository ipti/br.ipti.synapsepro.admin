import { ProjectController } from "../../../Services/Project/controller"
import { CreateProject } from "./type"

export const CreateProjectState = () => {

    const {requestCreateprojectMutation} = ProjectController()

    const CreateProject = (body: CreateProject) => {
        requestCreateprojectMutation.mutate(body)
    }

    return{
        CreateProject
    }
}