import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import * as Yup from "yup";
import ContentPage from "../../../Components/ContentPage";
import TextInput from "../../../Components/TextInput";
import CreateTsProvider, {
  CreateTsContext,
} from "../../../Context/TecnologySocial/CreateTecnologySocial/context";
import { CreateTsTypes } from "../../../Context/TecnologySocial/CreateTecnologySocial/type";
import { Padding, Row } from "../../../Styles/styles";
import DropdownComponent from "../../../Components/Dropdown";
import { estadosBrasileiros } from "../../../Controller/controllerGlobal";

const CreateTechnologySocial = () => {
  return (
    <CreateTsProvider>
      <CreateTechnologySocialPage />
    </CreateTsProvider>
  );
};

const CreateTechnologySocialPage = () => {
  const props = useContext(CreateTsContext) as CreateTsTypes;

  const initialValues = {
    name: "",
    uf: "",
  };

  const CreateTsSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obrigatório"),
    uf: Yup.string().required("Campo Obrigatório"),
  });

  return (
    <ContentPage title="Criar Escola" description="Crie sua escola.">
      <Padding padding="16px" />
      <Formik
        initialValues={initialValues}
        validationSchema={CreateTsSchema}
        onSubmit={(values) => {
          props.CreateTechnology({ name: values.name, uf: values.uf });
        }}
      >
        {({ values, errors, handleChange, touched }) => {
          return (
            <Form>
              <Row id="end">
                <Button label="Criar" />
              </Row>
              <div className="grid">

              <div className="col-12 md:col-6">
                <div>
                  <label>Nome *</label>
                  <Padding />
                  <TextInput
                    name="name"
                    onChange={handleChange}
                    placeholder="Digite o nome da escola *"
                    value={values.name}
                  />
                </div>
                <Padding />
                {errors.name && touched.name ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.name}
                  </div>
                ) : null}
              </div>
              <div className="col-12 md:col-6">
                <div>
                  <label>Estado *</label>
                  <Padding />
                  <DropdownComponent
                    name="uf"
                    onChange={handleChange}
                    options={estadosBrasileiros}
                    optionsValue="uf"
                    placerholder="Selecione o estado"
                    optionsLabel="nome"
                    value={values.uf}
                  />
                </div>
                <Padding />
                {errors.uf && touched.uf ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.uf}
                  </div>
                ) : null}
              </div>
              </div>

              <Padding padding="16px" />
            </Form>
          );
        }}
      </Formik>

    </ContentPage>
  );
};

export default CreateTechnologySocial;
