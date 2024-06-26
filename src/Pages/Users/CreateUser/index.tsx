import { Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import ContentPage from "../../../Components/ContentPage";
import UsersProvider, { UsersContext } from "../../../Context/Users/context";
import { UsersTypes } from "../../../Context/Users/type";
import { Padding } from "../../../Styles/styles";
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
    name: Yup.string().required("Campo Obrigatório").min(16, "Nome deve ter pelo menos 16 caracteres"),
    username: Yup.string().required("Campo Obrigatório").min(8, "Nome do usuário deve ter pelo menos 8 caracteres"),
    password: Yup.string().required("Campo Obrigatório").min(8, "Senha deve ter pelo menos 8 caracteres"),
    role: Yup.object().required("Campo Obrigatório"),
    project: Yup.array().required("Campo Obrigatório"),
    confirmPassword: Yup.string()
      .label("Confirmar senha")
      .required("Campo Obrigatório")
      .oneOf([Yup.ref("password")], "Senhas difirentes"),
  });

  return (
    <ContentPage title="Criar usuários" description="Criar usuário no meuBen.">
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
    </ContentPage>
  );
};

export default CreateUser;
