import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

import TagImage from "../../Assets/images/logo.svg";

import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import DropdownComponent from "../../Components/Dropdown";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/TextPassword";
import LoginProvider, { LoginContext } from "../../Context/Login/context";
import { LoginContextText } from "../../Context/Login/types";
import { setYear } from "../../Services/localstorage";
import { Column, Padding, Row } from "../../Styles/styles";
import { ContainerLogin, TopColors } from "./styles";

const Login = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
};

const LoginPage = () => {
  const props = useContext(LoginContext) as LoginContextText;

  const years = [2024, 2023, 2022, 2021];

  const [year, setYearState] = useState<any>();

  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Campo Obrigatório"),
    username: Yup.string().required("Campo Obrigatório"),
  });

  useEffect(() => {
    setYear("2024");
    setYearState(2024);
  }, []);

  return (
    <ContainerLogin>
      <Row style={{ height: 1 }}>
        <TopColors color="#667DF4" />
        <TopColors color="#F45A5A" />
        <TopColors color="#66D654" />
        <TopColors color="#EADA48" />
      </Row>
      <Column
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <div className="col-11 md:col-4">
            {/* <div className={classes.marginMobile20} /> */}
            <div>
                <Row id="center">
                  <img src={TagImage} alt=""></img>
                </Row>
            </div>
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
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          placeholder="Usuário"
                        />
                        <Padding />
                        {errors.username && touched.username ? (
                          <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.username}
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
                    <div>
                      <div>
                        <label>Ano</label>
                        <Padding />
                        <DropdownComponent
                          options={years}
                          placerholder="Ano"
                          onChange={(e) => {
                            setYearState(e.target.value);
                            setYear(e.target.value.toString());
                          }}
                          optionsLabel=""
                          value={year}
                        />
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
                    <div className="flex row justify-content-center ">
                      <div
                        className="flex row gap-2"
                        id="resetPassword textCenter"
                      >
                        <Column id="center">Faça a sua matricula</Column>
                        <Link id="link" to="/register">
                          clique aqui
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Column>
    </ContainerLogin>
  );
};

export default Login;
