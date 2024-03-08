import { useContext, useEffect, useRef, useState } from "react";
import homeImg from "../../../../../Assets/images/Capelo.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Row } from "../../../../../Styles/styles";
import ImageTextSteps from "../../ImageTextStpes";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Finish = () => {

  const props = useContext(RegisterContext) as RegisterTypes;
  const [value, setValue] = useState<number>(0);
  const toast = useRef<Toast | null>(null);
  const interval = useRef<any | null>(null);

  useEffect(() => {
      let _val = value;

      interval.current = setInterval(() => {
          _val += Math.floor(Math.random() * 10) + 1;

          if (_val >= 100) {
              _val = 100;
              toast.current?.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
              props.CreateRegister()

              clearInterval(interval.current!);
          }

          setValue(_val);
      }, 180);

      return () => {
          if (interval.current) {
              clearInterval(interval.current);
              interval.current = null;
          }
      };
  }, []);


  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p style={{ textAlign: "center" }}>Inscrição Finalizada <br /> Aguardes os próximos passos</p>} />
        <Toast ref={toast}></Toast>
        
        <Row id="center">

        <ProgressBar className="w-11 md:w-6" value={value}></ProgressBar>
        </Row>
      </Column>
    </>
  );
};

export default Finish;
