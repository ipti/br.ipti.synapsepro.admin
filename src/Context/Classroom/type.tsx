import { SchoolIdentification } from "../../Types/types";

export interface ClassroomTypes {
    CreateClassroom: (body: any) => void,
    initialValue: CreateClassroom,
    classrooms: undefined;
}

export interface CreateClassroom {
    name: string
}

export type Events = Event[]

export interface Event {
  id: number
  start_date: string
  end_date: string
  year: number
  school_inep_id_fk: string
  school_identification: SchoolIdentification
}



