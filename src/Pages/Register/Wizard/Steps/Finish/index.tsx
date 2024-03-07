import { useContext, useEffect } from "react";
import homeImg from "../../../../../Assets/images/Capelo.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Row } from "../../../../../Styles/styles";
import ImageTextSteps from "../../ImageTextStpes";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Finish = () => {

  const props = useContext(RegisterContext) as RegisterTypes;

  useEffect(() => {
    setTimeout(() => {
        props.CreateRegister()
    }, 360);
  }, [props])
  

  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p style={{ textAlign: "center" }}>Inscrição Finalizada <br /> Aguardes os próximos passos</p>} />
        <Row id="center">
          <div className="col-12 md:col-4">
            <DropdownComponent  placerholder="Escolha o projeto" onChange={(e) => props.setClassroom(e.target.value)} options={props.project} optionsLabel="name" value={props.classroom} />
          </div>
        </Row>
      </Column>
    </>
  );
};

export default Finish;
