import { useQuery } from 'react-query'
import {
  requestClassroom,
  requestClassroomClasses,
  requestClassroomOne,
  requestClassroomReport,
  requestYear,
  requestChangeTeachInClassroom
} from './request'

export const useFetchRequestClassroomOne = (id: number) => {
  return useQuery(['useRequestsClassroomOne', id], () =>
    requestClassroomOne(id)
  )
}

export const useFetchRequestChangeTeacherInClassroom = (data: {
  teacher_id: number
  classroom_id: number
}) => {
  return useQuery(['useRequestsClassroomOne'], () =>
    requestChangeTeachInClassroom(data)
  )
}

export const useFetchRequestAllYear = () => {
  return useQuery(['useRequestsClassroomOne'], () => requestYear())
}

export const useFetchRequestClassroomReport = (id: number) => {
  return useQuery(['useRequestsClassroomReport', id], () =>
    requestClassroomReport(id)
  )
}

export const useFetchRequestClassroomClasses = (id: number) => {
  return useQuery(['useRequestsClassroomClasses', id], () =>
    requestClassroomClasses(id)
  )
}

export const useFetchRequestClassroom = (idProject: number) => {
  return useQuery(['useRequestsClassroom', idProject], () =>
    requestClassroom(idProject)
  )
}
