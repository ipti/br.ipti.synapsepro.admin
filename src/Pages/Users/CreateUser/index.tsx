import { Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import ContentPage from "../../../Components/ContentPage";
import UsersProvider, { UsersContext } from "../../../Context/Users/context";
import { UsersTypes } from "../../../Context/Users/type";
import { Padding } from "../../../Styles/styles";
import InputsUser from "../Inputs";
import PasswordInput from "../../../Components/TextPassword";
import { Button } from "primereact/button";
import { ROLE } from "../../../Controller/controllerGlobal";

const CreateUser = () => {
  return (
    <UsersProvider>
      <CreateUserPage isStudent={false} />
    </UsersProvider>
  );
};

export const CreateUserPage = ({ isStudent }: { isStudent: boolean }) => {
  const props = useContext(UsersContext) as UsersTypes;

  const CreateUserSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo Obrigatório")
      .min(8, "Nome deve ter pelo menos 8 caracteres"),
    user_name: Yup.string()
      .required("Campo Obrigatório")
      .min(8, "Nome do usuário deve ter pelo menos 8 caracteres"),
    password: Yup.string()
      .required("Campo Obrigatório")
      .min(8, "Senha deve ter pelo menos 8 caracteres"),
    user_type_id: Yup.number().required("Campo Obrigatório"),
    school_id: Yup.number().required("Campo Obrigatório"),
    confirmPassword: Yup.string()
      .label("Confirmar senha")
      .required("Campo Obrigatório")
      .oneOf([Yup.ref("password")], "Senhas difirentes"),
  });

  return (
    <ContentPage title="Criar usuários" description="Criar usuário.">
      <Padding />
      <Formik
        initialValues={{
          name: "",
          user_name: "",
          user_type_id: isStudent ? ROLE.Student : undefined,
          password: "",
          school_id: undefined,
          confirmPassword: "",
        }}
        onSubmit={(values) => {

          props.CreateUser({
            ...values,
          });
        }}
        validationSchema={CreateUserSchema}
      >
        {({ values, handleChange, errors, touched }) => {

          console.log(errors)
          return (
            <Form>
              <InputsUser
                errors={errors}
                handleChange={handleChange}
                touched={touched}
                values={values}
                isStudent={isStudent}
              />
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
                  <PasswordInput
                    placeholder="Senha"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
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
    </ContentPage>
  );
};

export default CreateUser;
