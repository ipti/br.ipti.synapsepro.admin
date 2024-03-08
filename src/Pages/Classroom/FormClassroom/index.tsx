import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import TextInput from "../../../Components/TextInput";
import ClassroomProvider, { ClassroomContext } from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";
import { GetIdProject, getYear } from "../../../Services/localstorage";
import { Container, Padding, Row } from "../../../Styles/styles";

const FormClassroom = () => {
    return (
        <ClassroomProvider>
            <FormClassroomPage />
        </ClassroomProvider>
    )
}

const FormClassroomPage = () => {

    const initialValues = {
        name: ""
    }

    const props = useContext(ClassroomContext) as ClassroomTypes

    return (
        <Container>
            <div className="card">
                <Padding>
                    <h3>Criar turma</h3>
                    <Padding padding="16px" />
                    <Formik initialValues={initialValues} onSubmit={(values) => { props.CreateClassroom({ ...values, project: parseInt(GetIdProject()!), year: parseInt(getYear()!) }) }}>
                        {({ values, errors, handleChange, touched }) => {
                            return (
                                <Form>
                                    <label>Nome*</label>
                                    <TextInput name="name" onChange={handleChange} placeholder="Name*" value={values.name} />
                                    <Padding />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>{errors.name}</div>
                                    ) : null}
                                    <Padding padding="16px" />
                                    <Row id="end">
                                        <Button label="Criar" />
                                    </Row>
                                </Form>
                            )
                        }}
                    </Formik>

                </Padding>
            </div>
        </Container>
    )
}

export default FormClassroom;