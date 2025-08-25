import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import styles from '../../Styles'
import {
  requestAddClassroom,
  requestChangeClassroom,
  requestCreateClassroom,
  requestDeleteClassroom,
  requestUpdateClassroom,
  requestChangeTeachInClassroom
} from './request'
import {
  AddClassroom,
  ChangeClassroom,
  ChangeTeachInClassroom,
  CreateClassroom
} from '../../Context/Classroom/type'
import queryClient from '../reactquery'

export const ControllerClassroom = () => {
  const history = useNavigate()
  const requestCreateClassroomMutation = useMutation(
    (data: CreateClassroom) => requestCreateClassroom(data),
    {
      onError: (error: any) => {
        alert(error?.response.data.message)
      },
      onSuccess: data => {
        Swal.fire({
          icon: 'success',
          title: 'Turma criada com sucesso!',
          confirmButtonColor: styles.colors.colorsBaseProductNormal
        }).then(result => {
          if (result.isConfirmed) {
            history('/turma')
          }
        })
      }
    }
  )

  const requestAddClassroomMutation = useMutation(
    (data: AddClassroom) => requestAddClassroom(data),
    {
      onError: (error: any) => {
        alert(error?.response.data.message)
      },
      onSuccess: data => {
        Swal.fire({
          icon: 'success',
          title: 'Aluno adicionado com sucesso!',
          confirmButtonColor: styles.colors.colorsBaseProductNormal
        }).then(result => {
          if (result.isConfirmed) {
            queryClient.refetchQueries('useRequestsClassroomRegistration')
          }
        })
      }
    }
  )

  const requestChangeClassroomMutation = useMutation(
    (data: ChangeClassroom) => requestChangeClassroom(data),
    {
      onError: (error: any) => {
        alert(error?.response.data.message)
      },
      onSuccess: data => {
        Swal.fire({
          icon: 'success',
          title: 'Turma tranferida com sucesso!',
          confirmButtonColor: styles.colors.colorsBaseProductNormal
        }).then(result => {
          if (result.isConfirmed) {
            history('/turma')
          }
        })
      }
    }
  )

  const requestUpdateClassroomMutation = useMutation(
    ({ data, id }: { data: { name: string }; id: number }) =>
      requestUpdateClassroom(id, data),
    {
      onError: (error: any) => {
        alert(error?.response.data.message)
      },
      onSuccess: data => {
        Swal.fire({
          icon: 'success',
          title: 'Turma criada com sucesso!',
          confirmButtonColor: styles.colors.colorsBaseProductNormal
        }).then(result => {
          if (result.isConfirmed) {
            queryClient.refetchQueries('useRequestsClassroomOne')
            // history('/turmas')
          }
        })
      }
    }
  )

  const requestDeleteClassroomMutation = useMutation(
    (id: number) => requestDeleteClassroom(id),
    {
      onError: error => {},
      onSuccess: data => {
        Swal.fire({
          icon: 'success',
          title: 'Turma excluída com sucesso!',
          confirmButtonColor: styles.colors.colorsBaseProductNormal
        }).then(result => {
          if (result.isConfirmed) {
            queryClient.refetchQueries('useRequestsClassroom')
            queryClient.refetchQueries('requestProjectOne')
          }
        })
      }
    }
  )

  const requestChangeTeachInClassroomMutation = useMutation(
    (data: ChangeTeachInClassroom) => requestChangeTeachInClassroom(data),
    {
      onError: (error: any) => {
        alert(error?.response.data.message)
      },
      onSuccess: data => {
        Swal.fire({
          icon: 'success',
          title: 'Alterado com sucesso',
          confirmButtonColor: styles.colors.colorsBaseProductNormal
        }).then(result => {
          if (result.isConfirmed) {
            queryClient.refetchQueries('useRequestsClassroomOne')
          }
        })
      }
    }
  )
  return {
    requestCreateClassroomMutation,
    requestChangeClassroomMutation,
    requestUpdateClassroomMutation,
    requestDeleteClassroomMutation,
    requestAddClassroomMutation,
    requestChangeTeachInClassroomMutation
  }
}
