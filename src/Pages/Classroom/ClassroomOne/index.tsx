import { Form, Formik } from 'formik'
import { Button } from 'primereact/button'
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import pessoas from '../../../Assets/images/pessoasgray.svg'

import TextInput from '../../../Components/TextInput'

import ContentPage from '../../../Components/ContentPage'
import Loading from '../../../Components/Loading'
import ClassroomProvider, {
  ClassroomContext
} from '../../../Context/Classroom/context'
import { ClassroomTypes } from '../../../Context/Classroom/type'
import { useFetchRequestClassroomOne } from '../../../Services/Classroom/query'
import { Column, Padding, Row } from '../../../Styles/styles'
import CardItensClassrooom from './CardItensClassroom'
import DropdownComponent from '../../../Components/Dropdown'
import { useFetchRequestUsers } from '../../../Services/Users/query'

const ClassroomOne = () => {
  return (
    <ClassroomProvider>
      <ClassroomOnePage />
    </ClassroomProvider>
  )
}
type ITeacherData = {
  id: number
  user_id: number
  name: string
}
const ClassroomOnePage = () => {
  const history = useNavigate()
  const { id } = useParams()
  const props = useContext(ClassroomContext) as ClassroomTypes
  const { data: classroom } = useFetchRequestClassroomOne(parseInt(id!))
  const { data: teachers } = useFetchRequestUsers('')
  const [edit, setEdit] = useState(false)

  const [teacher, setTeacher] = useState<ITeacherData>({} as ITeacherData)
  const [changeTeacher, setChangeTeacher] = useState<boolean>(false)

  const handleSelectTeacher = (e: any) => {
    const selectedTeacherId = e.value
    setTeacher(e.value)
    const data = {
      classroom_id: parseInt(id!),
      teacher_id: selectedTeacherId
    }
    props.ChangeTeachInClassroom(data)
    setTimeout(() => {
      setChangeTeacher(false)
    }, 1000)
  }

  if (props.isLoading) return <Loading />

  return (
    <ContentPage title={classroom?.name} description="Detalhes da sua turma.">
      {edit ? (
        <>
          {classroom ? (
            <Formik
              initialValues={{ name: classroom?.name }}
              onSubmit={values => {
                props.UpdateClassroom(values, parseInt(id!))
                setEdit(false)
              }}
            >
              {({ values, handleChange }) => {
                return (
                  <Form>
                    <Row>
                      <TextInput
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                      <Padding />
                      <Button label="Salvar" icon={'pi pi-save'} />
                      <Padding />
                      <Button
                        label="Cancelar"
                        severity="secondary"
                        type="button"
                        onClick={() => setEdit(false)}
                      />
                    </Row>
                  </Form>
                )
              }}
            </Formik>
          ) : null}
        </>
      ) : (
        <Column>
          <Row id="end">
            {changeTeacher ? (
              <DropdownComponent
                options={teachers}
                optionsLabel={'name'}
                optionsValue={'id'}
                name={teacher.name}
                onChange={handleSelectTeacher}
                placerholder="Selecione um Professor"
                value={teacher}
              />
            ) : (
              <Button
                onClick={() => {
                  !changeTeacher && setChangeTeacher(prev => !prev)
                }}
              >
                Atualizar professor resposavel
              </Button>
            )}
          </Row>
        </Column>
      )}
      <Padding padding="16px" />
      <div className="grid">
        <div
          className="col-12 md:col-6"
          onClick={() => history(`/turma/${id}/alunos`)}
        >
          <CardItensClassrooom
            title="Matriculas"
            description="Acesse para gerenciar seus alunos"
            icon={pessoas}
            count={classroom?.students?.length}
          />
        </div>
      </div>
    </ContentPage>
  )
}

export default ClassroomOne
