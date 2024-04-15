import { useContext, useEffect, useRef, useState } from "react";
import homeImg from "../../../../../Assets/images/Caderno.png";
import loading from "../../../../../Assets/images/Gif de Carregamento.gif";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import ImageTextSteps from "../../ImageTextStpes";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Finish = () => {
  const props = useContext(RegisterContext) as RegisterTypes;
  const [value, setValue] = useState<number>(0);

  const interval = useRef<any | null>(null);

  useEffect(() => {
      let _val = value;

      interval.current = setInterval(() => {
          _val += Math.floor(Math.random() * 10) + 1;

          if (_val >= 100) {
              _val = 100;
              props.CreateRegister()

              clearInterval(interval.current!);
          }

          setValue(_val);
      }, 120);

      return () => {
          if (interval.current) {
              clearInterval(interval.current);
              interval.current = null;
          }
      };
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
