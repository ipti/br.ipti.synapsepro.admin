import { Dispatch, SetStateAction } from 'react'

export interface ClassroomTypes {
  CreateClassroom: (body: CreateClassroom) => void
  initialValue: any
  classrooms: Classroom[] | undefined
  UpdateClassroom: (
    body: {
      name: string
    },
    id: number
  ) => void
  DeleteClassroom: (id: number) => void
  isLoading: boolean
  project: number | undefined
  setProject: Dispatch<SetStateAction<number | undefined>>
  ChangeClassroom: (body: ChangeClassroom) => void
  ChangeTeachInClassroom: (body: ChangeTeachInClassroom) => void
}

export interface Classroom {
  id: number
  name: string
  school_id: number
  school_name: string
  uf: string
  created_at: string
  updated_at: string
}

export interface CreateClassroom {
  name: string
  school_id?: number
  teacher_id?: number
  year_id?: number
}

export interface AddClassroom {
  classroom_id: number
  student_id: number
}

export interface ChangeClassroom {
  idProject: string
  idClassroom: string
}

export type Events = Event[]

export interface Event {
  id: number
  start_date: string
  end_date: string
  year: number
}

export interface ChangeTeachInClassroom {
  teacher_id: number
  classroom_id: number
}
