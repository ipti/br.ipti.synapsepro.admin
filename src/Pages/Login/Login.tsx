import { Form, Formik } from "formik";


import { Button } from "primereact/button";
import { useContext } from "react";
import * as Yup from "yup";
import imageRight from "../../Assets/images/personagem_comemorando_CELESTE_cie.png";
import imageLeft from "../../Assets/images/personagem_comemorando_MATEUS_mat.png";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/TextPassword";
import LoginProvider, { LoginContext } from "../../Context/Login/context";
import { LoginContextText } from "../../Context/Login/types";
import { Column, Padding, Row } from "../../Styles/styles";
import {
  BackgroundBottomRight,
  BackgroundTopLeft,
  ContainerLogin,
} from "./styles";

const Login = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
};

const LoginPage = () => {
  const props = useContext(LoginContext) as LoginContextText;

  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Campo Obrigatório"),
    user_name: Yup.string().required("Campo Obrigatório"),
  });

  return (
    <>
      <BackgroundTopLeft>
        <img src={imageLeft} alt="" />
      </BackgroundTopLeft>
      <BackgroundBottomRight>
        <img src={imageRight} alt="" />
      </BackgroundBottomRight>
      <ContainerLogin>
        <div className="grid h-full">
          <div
            className="col-12 lg:col-7"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              position: "relative",
              overflowY: "auto",

            }}
          >
            <div style={{zIndex: 200, position: "absolute"}}>
              <div className="col-12 md:col-12" >
                {/* <div className={classes.marginMobile20} /> */}
                <Row style={{ justifyContent: "center" }}>
                  <Column>
                    <h1>Synapse</h1>
                    <h4>Entre com suas crendencias</h4>
                  </Column>
                </Row>
                {/* <div className={classes.marginMobile} /> */}
                <div className="p-4" />
                <Formik
                  initialValues={props.initialValue}
                  onSubmit={(values) => {
                    props.Login(values);
                  }}
                  validationSchema={LoginSchema}
                  validateOnChange={false}
                >
                  {({ values, errors, handleChange, touched }) => {
                    return (
                      <Form>
                        <div>
                          <div>
                            <label>Usuário</label>
                            <Padding />
                            <TextInput
                              name="user_name"
                              value={values.user_name}
                              onChange={handleChange}
                              placeholder="Usuário"
                            />
                            <Padding />
                            {errors.user_name && touched.user_name ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.user_name}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="p-2" />
                        <div>
                          <div>
                            <label>Senha</label>
                            <Padding />
                            <PasswordInput
                              name="password"
                              placeholder="Senha"
                              onChange={handleChange}
                              value={values.password}
                            />
                            <Padding />
                            {errors.password && touched.password ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <Padding />

                        {props.error ? (
                          <div>
                            <div>
                              {!props.error ? "Usuário ou senha inválido" : ""}
                            </div>
                          </div>
                        ) : null}
                        <div className="p-2" />
                        <div>
                          <div>
                            <Button
                              className={"t-button-primary"}
                              type="submit"
                              label="Entrar"
                            />
                          </div>
                        </div>
                        <div className="p-2" />
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </ContainerLogin>
    </>
  );
};

export default Login;
