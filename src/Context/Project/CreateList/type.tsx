export interface CreateProjectTypes {
    CreateProject: (body: CreateProject) => void
}


export interface CreateProject {
    name: string,
    socialTechnologyId: number
}