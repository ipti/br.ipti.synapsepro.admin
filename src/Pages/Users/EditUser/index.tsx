import { Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import UsersProvider, { UsersContext } from "../../../Context/Users/context";
import { UsersTypes } from "../../../Context/Users/type";
import { Container, Padding } from "../../../Styles/styles";
import InputsUser from "../Inputs";
import { useFetchRequestUsersOne } from "../../../Services/Users/query";
import { useParams } from "react-router-dom";
import { useFetchRequestProjectLists } from "../../../Services/Project/query";

const EditUser = () => {
  return (
    <UsersProvider>
      <EditUserPage />
    </UsersProvider>
  );
};

const EditUserPage = () => {
  const props = useContext(UsersContext) as UsersTypes;

  const {id} = useParams()

    const {data: project} = useFetchRequestUsersOne(parseInt(id!))
    const { data: projects } = useFetchRequestProjectLists();


  const CreateUserSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obrigatório"),
    username: Yup.string().required("Campo Obrigatório"),
    role: Yup.string().required("Campo Obrigatório"),
    project: Yup.array().required("Campo Obrigatório"),
  });

  return (
    <Container>
      <Padding padding="8px" />
      <h3>Editar usuário</h3>
      <Padding />
      {project ? <Formik
        initialValues={{
          name: project?.name ?? "",
          username: project?.username ?? "",
          role: project?.role ?? "",
          password: "",
          project: projects,
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          // props.UpdateUser(values, parseInt(id!));
        }}
        validationSchema={CreateUserSchema}
      >
        {({ values, handleChange, errors, touched }) => {
          return (
            <InputsUser errors={errors} handleChange={handleChange} touched={touched} values={values} />
          );
        }}
      </Formik> : null}
    </Container>
  );
};

export default EditUser;
