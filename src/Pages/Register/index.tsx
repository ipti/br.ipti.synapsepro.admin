import { TopColors } from "../Login/styles";
import { Container } from "./style";
import TagImage from "../../Assets/images/taglogin.svg"
import BackButton from "../../Assets/images/backIcon.svg"
import Wizard from "./Wizard";
import RegisterProvider, { RegisterContext } from "../../Context/Register/context";
import { Formik } from "formik";
import { useContext } from "react";
import { RegisterTypes } from "../../Context/Register/type";

const Register = () => {
  return (
    <RegisterProvider>
      <RegisterPage />
    </RegisterProvider>
  )
}

const RegisterPage = () => {

  const props = useContext(RegisterContext) as RegisterTypes;

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TopColors color="#667DF4" />
        <TopColors color="#F45A5A" />
        <TopColors color="#66D654" />
        <TopColors color="#EADA48" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          className={"backButton"}
          //   onClick={backStep}
          src={BackButton}
          alt=""
        ></img>
        <img className={"imgTag"} src={TagImage} alt=""></img>
      </div>
    
      <Wizard  />

    </Container>
  );
};

export default Register
