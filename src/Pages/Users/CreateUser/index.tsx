import { MultiSelect } from "primereact/multiselect";
import DropdownComponent from "../../../Components/Dropdown";
import TextInput from "../../../Components/TextInput";
import PasswordInput from "../../../Components/TextPassword";
import { ROLE } from "../../../Controller/controllerGlobal";
import { useFetchRequestProjectLists } from "../../../Services/Project/query";
import { Container, Padding } from "../../../Styles/styles";
import { Button } from "primereact/button";
import { Form, Formik } from "formik";
import UsersProvider, { UsersContext } from "../../../Context/Users/context";
import { useContext } from "react";
import { UsersTypes } from "../../../Context/Users/type";
import * as Yup from "yup";

const CreateUser = () => {
  return (
    <UsersProvider>
      <CreateUserPage />
    </UsersProvider>
  );
};

const CreateUserPage = () => {
  const { data: projects } = useFetchRequestProjectLists();
  const props = useContext(UsersContext) as UsersTypes;

  const CreateUserSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obrigatório"),
    username: Yup.string().required("Campo Obrigatório"),
    password: Yup.string().required("Campo Obrigatório"),
    role: Yup.string().required("Campo Obrigatório"),
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
          role: "",
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
            console.log(errors)
          return (
            <Form>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Nome</label>
                  <Padding />
                  <TextInput
                    placeholder="Nome"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                  />
                  <Padding />
                  {errors.name && touched.name ? (
                    <div style={{ color: "red" }}>
                      {errors.name}
                      <Padding />
                    </div>
                  ) : null}
                </div>

                <div className="col-12 md:col-6">
                  <label>Usuário</label>
                  <Padding />
                  <TextInput
                    placeholder="Usuário"
                    value={values.username}
                    onChange={handleChange}
                    name="username"
                  />
                  <Padding />
                  {errors.username && touched.username ? (
                    <div style={{ color: "red" }}>
                      {errors.username}
                      <Padding />
                    </div>
                  ) : null}
                </div>
              </div>{" "}
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Tipo de usuário</label>
                  <Padding />
                  <DropdownComponent
                    name="role"
                    placerholder="Tipo de usuário"
                    optionsLabel=""
                    value={values.role}
                    onChange={handleChange}
                    options={[
                      ROLE.ADMIN,
                      ROLE.USER,
                      ROLE.COORDINATORS,
                      ROLE.REAPPLICATORS,
                    ]}
                  />
                  <Padding />
                  {errors.role && touched.role ? (
                    <div style={{ color: "red" }}>
                      {errors.role}
                      <Padding />
                    </div>
                  ) : null}
                </div>
                <div className="col-12 md:col-6">
                  <label>Projetos</label>
                  <Padding />
                  <MultiSelect
                    options={projects}
                    optionLabel="name"
                    name="project"
                    value={values.project}
                    onChange={handleChange}
                    filter
                    placeholder="Projetos"
                    maxSelectedLabels={3}
                    className="w-full"
                  />
                  <Padding />
                  {errors.project && touched.project ? (
                    <div style={{ color: "red" }}>
                      {errors.project}
                      <Padding />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Senha</label>
                  <Padding />
                  <PasswordInput
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Padding />
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>
                      {errors.password}
                      <Padding />
                    </div>
                  ) : null}
                </div>
                <div className="col-12 md:col-6">
                  <label>Confirmar senha</label>
                  <Padding />
                  <PasswordInput placeholder="Senha" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                  <Padding />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div style={{ color: "red" }}>
                      {errors.confirmPassword}
                      <Padding />
                    </div>
                  ) : null}
                </div>
              </div>{" "}
              <Padding padding="16px" />
              <Button label="Criar" />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateUser;
