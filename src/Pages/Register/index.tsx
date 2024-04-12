import { useContext } from "react";
import BackButton from "../../Assets/images/backIcon.svg";
import TagImage from "../../Assets/images/logo.svg";
import RegisterProvider, {
  RegisterContext,
} from "../../Context/Register/context";
import { RegisterTypes } from "../../Context/Register/type";
import { Column, Row } from "../../Styles/styles";
import Wizard from "./Wizard";
import { Container } from "./style";

const Register = () => {
  return (
    <RegisterProvider>
      <RegisterPage />
    </RegisterProvider>
  );
};

const RegisterPage = () => {
  const props = useContext(RegisterContext) as RegisterTypes;

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          className={"backButton"}
          onClick={props.backStep}
          src={BackButton}
          alt=""
        ></img>
      </div>

      <Column id="center" className="h-full">
        <Column id="center" style={{ height: "100%" }}>
          <Row id="center">
            <img className={"imgLogo"} src={TagImage} alt=""></img>
          </Row>
          <Wizard />
        </Column>
      </Column>
    </Container>
  );
};

export default Register;
