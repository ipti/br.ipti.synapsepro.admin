import { AddClassroom } from "../type";

export interface RegistrationClassroomTypes {
  registrations?: RegistrationsList | undefined;
  DeleteRegistration: (id: number) => void
  isLoading: boolean
  AddStudentClassroom: (data: AddClassroom) => void
}

export type RegistrationsList = Root;



export interface Root {
  id: number
  name: string
  students: Student[]
}

export interface Student {
  id: number
  name: string
  created_at: string
  updated_at: string
}
