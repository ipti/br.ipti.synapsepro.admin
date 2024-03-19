import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import TextInput from "../../../Components/TextInput"
import ClassroomProvider, { ClassroomContext } from "../../../Context/Classroom/context"
import { ClassroomTypes } from "../../../Context/Classroom/type"
import { useFetchRequestClassroomOne } from "../../../Services/Classroom/query"
import { Column, Container, Padding, Row } from "../../../Styles/styles"
import CardItensClassrooom from "./CardItensClassroom"

const ClassroomOne = () => {
    return (
        <ClassroomProvider>
            <ClassroomOnePage />
        </ClassroomProvider>
    )
}

const ClassroomOnePage = () => {

    const history = useNavigate()
    const { id } = useParams()
    const props = useContext(ClassroomContext) as ClassroomTypes
    const { data: classroom } = useFetchRequestClassroomOne(parseInt(id!))
    const [edit, setEdit] = useState(false)

    return (
        <Container>
            {edit ? <>
                {classroom ? <Formik initialValues={{ name: classroom?.name }} onSubmit={(values) => { props.UpdateClassroom(values, parseInt(id!)); setEdit(false) }}>
                    {({ values, handleChange }) => {
                        return (
                            <Form>
                                <Row>
                                    <TextInput name="name" onChange={handleChange} value={values.name} />
                                    <Padding />
                                    <Button label="Salvar" icon={"pi pi-save"} />
                                    <Padding />
                                    <Button label="Cancelar" severity="secondary" type="button" onClick={() => setEdit(false)} />
                                </Row>
                            </Form>
                        )
                    }}
                </Formik> : null}
            </> : <Row>
                <Column id="center">
                    <h2>{classroom?.name}</h2>
                </Column>
                <Padding />
                <Button text icon="pi pi-pencil" onClick={() => setEdit(true)} />
            </Row>}
            <Padding padding="16px" />
            <div className="grid">
                <div className="col-12 md:col-6" onClick={() => history(`/turma/${id}/alunos`)}>
                    <CardItensClassrooom title="Alunos" description="Gerencie seus alunos" icon="pi pi-users" />
                </div>
                <div className="col-12 md:col-6" onClick={() => history(`/turma/${id}/encontros`)}>
                    <CardItensClassrooom title="Encontros" description="Gerencie seus encontros" icon="pi pi-home" />
                </div>
                <div className="col-12 md:col-6" onClick={() => history(`/turma/${id}/relatorio`)}>
                    <CardItensClassrooom title="Tabela" description="Relatório entre Alunos e Encontros" icon="pi pi-table" />
                </div>
            </div>
        </Container>
    )
}

export default ClassroomOne