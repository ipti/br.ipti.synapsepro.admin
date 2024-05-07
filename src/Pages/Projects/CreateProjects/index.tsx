import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import TextInput from "../../../Components/TextInput";
import CreateProjectProvider, { CreateProjectContext } from "../../../Context/Project/CreateList/context";
import { CreateProjectTypes } from "../../../Context/Project/CreateList/type";
import { GetIdTs } from "../../../Services/localstorage";
import { Container, Padding, Row } from "../../../Styles/styles";

const CreateProjects = () => {
  return (
    <CreateProjectProvider>
      <CreateProjectsPage />
    </CreateProjectProvider>
  );
};

const CreateProjectsPage = () => {

    const props = useContext(CreateProjectContext) as CreateProjectTypes

  const initialValues = {
    name: "",
  };

  return (
    <Container>
      <div className="card">
        <Padding>
          <h3>Criar projeto</h3>
          <Padding padding="16px" />
          <Formik initialValues={initialValues} onSubmit={(values) => {props.CreateProject({name: values.name, socialTechnologyId: parseInt(GetIdTs()!)})}}>
            {({ values, errors, handleChange, touched }) => {
              return (
                <Form>
                  <div className="col-12 md:col-6">
                    <label>Nome*</label>
                    <Padding />
                    <TextInput
                      name="name"
                      onChange={handleChange}
                      placeholder="Nome*"
                      value={values.name}
                    />
                  </div>
                  <Padding />
                  {errors.name && touched.name ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.name}
                    </div>
                  ) : null}
                  <Padding padding="16px" />
                  <Row id="end">
                    <Button label="Criar" />
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </Padding>
      </div>
    </Container>
  );
};

export default CreateProjects;
