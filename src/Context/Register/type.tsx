import { Dispatch, SetStateAction } from "react";

export interface RegisterTypes {
    padding: string,
    NextStep: (values: any) => void
    isOverAge: boolean | undefined
    setIsOverAge: Dispatch<SetStateAction<boolean | undefined>>
    initialState: Registration
    step: number,
    project: Projects | undefined,

}

export interface Registration {
    classroom_fk: number | null;
    name: string;
    birthday: string;
    cpf?: string;
    sex: number | null;
    color_race: number | null;
    deficiency: boolean | null;
    deficiency_description?: string;
    responsable_name?: string;
    responsable_cpf?: string;
    responsable_telephone?: string;
    zone: number | null;
}


export type Projects = Project[]

export interface Project {
    id: number
    name: string
    active: boolean
    classrooms: Classroom[]
}

export interface Classroom {
    id: number
    project_fk: number
    name: string
    year: number
    active: boolean
}
