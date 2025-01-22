import { AddClassroom } from "../type";

export interface ClassesClassroomTypes {
  classes?: ClassesList | undefined;
  isLoading: boolean
}

export type ClassesList = Discipline[]

export interface Discipline {
  id: number
  teacher: Teacher
  discipline: Discipline
  tasks: number[]
  lessons: []
}

export interface Teacher {
  id: number
  name: string
}

export interface Discipline {
  id: number
  name: string
}

export interface Lessons {
  "4"?: N4
  "21"?: N21
}

export interface N4 {
  lesson_id: number
  tasks_id: number[]
}

export interface N21 {
  lesson_id: number
  tasks_id: number[]
}
