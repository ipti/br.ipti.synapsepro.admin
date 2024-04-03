import { Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import UsersProvider, { UsersContext } from "../../../Context/Users/context";
import { UsersTypes } from "../../../Context/Users/type";
import { Container, Padding } from "../../../Styles/styles";
import InputsUser from "../Inputs";

const CreateUser = () => {
  return (
    <UsersProvider>
      <CreateUserPage />
    </UsersProvider>
  );
};

const CreateUserPage = () => {
  const props = useContext(UsersContext) as UsersTypes;

  const CreateUserSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obrigatório"),
    username: Yup.string().required("Campo Obrigatório"),
    password: Yup.string().required("Campo Obrigatório"),
    role: Yup.object().required("Campo Obrigatório"),
    project: Yup.array().required("Campo Obrigatório"),
    confirmPassword: Yup.string()
      .label("Confirmar senha")
      .required("Campo Obrigatório")
      .oneOf([Yup.ref("password")], "Senhas difirentes"),
  });

  return (
    <Container>
      <Padding padding="8px" />
      <h3>Criar usuários</h3>
      <Padding />
      <Formik
        initialValues={{
          name: "",
          username: "",
          role: undefined,
          password: "",
          project: [],
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          props.CreateUser(values);
        }}
        validationSchema={CreateUserSchema}
      >
        {({ values, handleChange, errors, touched }) => {
          return (
            <InputsUser errors={errors} handleChange={handleChange} touched={touched} values={values} />
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateUser;
