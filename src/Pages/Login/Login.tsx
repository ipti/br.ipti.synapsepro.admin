
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

import TagImage from "../../Assets/images/taglogin.svg";

import { Button } from "primereact/button";
import TextInput from "../../Components/TextInput";
import { Column, Padding, Row } from "../../Styles/styles";
import { ContainerLogin, TopColors } from "./styles";


const Login = () => {

  return (
    <ContainerLogin >
      <Row style={{ height: 1 }}>
        <TopColors color="#667DF4" />
        <TopColors color="#F45A5A" />
        <TopColors color="#66D654" />
        <TopColors color="#EADA48" />
      </Row>
      <img id="margin" src={TagImage} alt=""></img>
      <Column style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "relative"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "relative"
        }}>
          <div className="col-11 md:col-4" >
            {/* <div className={classes.marginMobile20} /> */}
            <div>
              <div>
                <p id="titleLogin">Matricula Online </p>
                <div className="p-2" />
                <p id="subTitleLogin">Entre com as suas credenciais </p>
              </div>
            </div>
            {/* <div className={classes.marginMobile} /> */}
            <Formik
              initialValues={{}}
              onSubmit={() => { }}
              validationSchema={[]}
              validateOnChange={false}
            >
              {props => {
                return (
                  <Form>
                    <div>
                      <div>
                        <TextInput
                          name="username"
                          onChange={props.handleChange}
                          placeholder="Usuário"
                        />
                        <div>
                          {/* {props.errors.username} */}
                        </div>
                      </div>
                    </div>
                    <div className="p-2" />
                    <div
                    >
                      <div >
                        <TextInput
                          name="password"
                          placeholder="Senha"
                        />
                        <div >
                          {/* {props.errors.password} */}
                        </div>
                      </div>
                    </div>
                    <Padding />

                    {/* {
                  !isValid ? <div

                  >
                  <div>
                  {!isValid ? "Usuário ou senha inválido" : ""}
                  </div>
                  </div> : null
                } */}
                    <div className="p-2" />
                    <div
                    >
                      <div>
                        <Button
                          className={"t-button-primary"}
                          type="submit"
                          label="Entrar"
                        />
                      </div>
                    </div>
                    <div className="p-2" />
                    <div className="flex row justify-content-center gap-2">
                      <div id="resetPassword textCenter">
                        Faça a sua matricula
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
