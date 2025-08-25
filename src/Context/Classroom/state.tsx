import { useEffect, useState } from 'react'
import { ControllerClassroom } from '../../Services/Classroom/controller'
import { useFetchRequestClassroom } from '../../Services/Classroom/query'
import {
  ChangeClassroom,
  ChangeTeachInClassroom,
  Classroom,
  CreateClassroom
} from './type'

export const ClassroomState = () => {
  const initialValue = {
    name: ''
  }

  const [classrooms, setClassrooms] = useState<Classroom[] | undefined>()
  const [project, setProject] = useState<number | undefined>()

  const { data: classroomsFetch, isLoading } = useFetchRequestClassroom(
    project!
  )

  const {
    requestCreateClassroomMutation,
    requestChangeClassroomMutation,
    requestDeleteClassroomMutation,
    requestUpdateClassroomMutation,
    requestChangeTeachInClassroomMutation
  } = ControllerClassroom()

  const UpdateClassroom = (body: { name: string }, id: number) => {
    requestUpdateClassroomMutation.mutate({ data: body, id: id })
  }

  useEffect(() => {
    if (classroomsFetch) {
      setClassrooms(classroomsFetch)
    }
  }, [classroomsFetch, project])

  const CreateClassroom = (body: CreateClassroom) => {
    requestCreateClassroomMutation.mutate(body)
  }
  const ChangeTeachInClassroom = (body: ChangeTeachInClassroom) => {
    requestChangeTeachInClassroomMutation.mutate(body)
  }

  const ChangeClassroom = (body: ChangeClassroom) => {
    requestChangeClassroomMutation.mutate(body)
  }

  const DeleteClassroom = (id: number) => {
    requestDeleteClassroomMutation.mutate(id)
  }

  return {
    initialValue,
    CreateClassroom,
    classrooms,
    UpdateClassroom,
    DeleteClassroom,
    isLoading,
    project,
    setProject,
    ChangeClassroom,
    ChangeTeachInClassroom
  }
}
