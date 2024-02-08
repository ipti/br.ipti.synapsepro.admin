import { Button } from "primereact/button";
import { useState } from "react";
import homeImg from "../../../../../Assets/images/Caderno.png";
import { Column, Row } from "../../../../../Styles/styles";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const NotPeriod = () => {

  return (
    <>
      <Column className="contentStart" id="center">
        <div className="col-12">
          <img className="imageRegistration" src={homeImg} alt="" />
        </div>
        <div className="col-12">
          <h1>Matrícula Online</h1>
          <p>
            Não estamos em período de matrícula.
            <br /> Consulte o calenário
          </p>
        </div>
        <Row id="center" className={"marginTop marginButtom"}>
          <div className="col-4">
            <Button
              type="button"
              // onClick={onButton}
              className="t-button-primary"
              label="Voltar"
              // disabled={!isValid}
            />
          </div>
        </Row>
      </Column>
    </>
  );
};

export default NotPeriod;
