import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import TextInput from "../../../Components/TextInput";
import CreateTsProvider, { CreateTsContext } from "../../../Context/TecnologySocial/CreateTecnologySocial/context";
import { CreateTsTypes } from "../../../Context/TecnologySocial/CreateTecnologySocial/type";
import { Container, Padding, Row } from "../../../Styles/styles";

const CreateTechnologySocial = () => {
  return (
    <CreateTsProvider>
      <CreateTechnologySocialPage />
    </CreateTsProvider>
  );
};

const CreateTechnologySocialPage = () => {

    const props = useContext(CreateTsContext) as CreateTsTypes

  const initialValues = {
    name: "",
  };

  return (
    <Container>
      <div className="card">
        <Padding>
          <h3>Criar Tecnologia</h3>
          <Padding padding="16px" />
          <Formik initialValues={initialValues} onSubmit={(values) => {props.CreateTechnology({name: values.name})}}>
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

export default CreateTechnologySocial;
