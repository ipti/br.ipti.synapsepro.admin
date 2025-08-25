import {
  AddClassroom,
  ChangeClassroom,
  ChangeTeachInClassroom,
  CreateClassroom
} from '../../Context/Classroom/type'
import http from '../axios'
import { GetIdTs, logout } from '../localstorage'

export const requestCreateClassroom = (data: CreateClassroom) => {
  return http
    .post('/classroom', data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      alert(err.response.message)
      throw err
    })
}

export const requestChangeTeachInClassroom = (data: ChangeTeachInClassroom) => {
  return http
    .put('/classroom/teacher', data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      alert(err.response.message)
      throw err
    })
}

export const requestAddClassroom = (data: AddClassroom) => {
  return http
    .post('/classroom/add-student', data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      alert(err.response.message)
      throw err
    })
}

export const requestClassroom = (idProject: number) => {
  if (GetIdTs()) {
    let path = '/classroom/by-school-id/' + GetIdTs()
    return http
      .get(path)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err
      })
  }

  let path = '/classroom/by_teacher_id/' + GetIdTs()
  return http
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestClassroomOne = (id: number) => {
  let path = '/classroom/' + id
  return http
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestClassroomReport = (id: number) => {
  let path = '/classroom-bff/report'
  return http
    .get(path, { params: { idClassroom: id } })
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestUpdateClassroom = (id: number, data: { name: string }) => {
  let path = '/classroom/'
  return http
    .put(path + id, data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestChangeClassroom = (data: ChangeClassroom) => {
  let path =
    '/classroom-bff/change-project?idClassroom=' +
    data.idClassroom +
    '&idProject=' +
    data.idProject
  return http
    .put(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestClassroomRegistration = (id: number) => {
  let path = '/classroom/' + id
  return http
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestYear = () => {
  let path = '/year'
  return http
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestClassroomRegistrationOne = (id: number) => {
  let path = '/registration/' + id
  return http
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestClassroomClasses = (id: number) => {
  let path = '/block/by_teacher_id_in_current_year/' + id
  return http
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err
    })
}

export const requestDeleteClassroom = (id: number) => {
  let path = '/classroom/' + id
  return http
    .delete(path)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      alert(err.response.message)
      throw err
    })
}
