import { useContext, useEffect } from "react";
import homeImg from "../../../../../Assets/images/Caderno.png";
import loading from "../../../../../Assets/images/Gif de Carregamento.gif";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import ImageTextSteps from "../../ImageTextStpes";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Finish = () => {
  const props = useContext(RegisterContext) as RegisterTypes;

  useEffect(() => {
    setTimeout(() => {
      props.CreateRegister();
    }, 1200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps
          img={homeImg}
          title="Matrícula Online"
          subTitle={
            <p style={{ textAlign: "center" }}>
              Inscrição Finalizada <br /> Aguardes os próximos passos
            </p>
          }
        />
        <Padding padding="16px" />
        <Row id="center">
          <img
            src={loading}
            alt="loading..."
            style={{ width: window.innerWidth > 800 ? 600 : 256 }}
          />
        </Row>
      </Column>
    </>
  );
};

export default Finish;
