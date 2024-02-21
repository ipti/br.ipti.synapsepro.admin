import { Button } from "primereact/button";
import DropdownComponent from "../../../../../../Components/Dropdown";
import RadioButtonComponent from "../../../../../../Components/RadioButton";
import TextInput from "../../../../../../Components/TextInput";
import { Column, Padding, Row } from "../../../../../../Styles/styles";
import { RegisterContext } from "../../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../../Context/Register/type";
import { useContext } from "react";

const UnderAge = () => {
  const props = useContext(RegisterContext) as RegisterTypes;
  return (
    <>
      <Column className="contentStart" id="center">
        <Row id="center">
          <div className="col-12 md:col-4">
            <Padding />

            <div>
              <label>Nome do responsável *</label>
              <Padding />
              <TextInput placeholder="Nome do responsável *" />
            </div>
            <Padding padding={props.padding} />
            <div>
              <label>CPF do responvável *</label>
              <Padding />
              <TextInput placeholder="CPF do responsável *" />
            </div>
            <Padding padding={props.padding} />
            <div>
              <label>Data de Nascimento *</label>
              <Padding />
              <TextInput placeholder="Data de Nascimento *" />
            </div>
            <Padding padding={props.padding} />
            <div>
              <label>Sexo *</label>
              <Padding />
              <DropdownComponent placerholder="Sexo *" />
            </div>
            <Padding padding={props.padding} />
            <div>
              <label>Telefone *</label>
              <Padding />
              <TextInput placeholder="Telefone *" />
            </div>
            <Padding padding={props.padding} />

            <div>
              <label>Zona *</label>
              <Padding />
              <Row className="gap-2">
                <RadioButtonComponent label="Rural" />
                <RadioButtonComponent label="Urbana" />
              </Row>
            </div>
            <Padding padding={props.padding} />
          </div>
        </Row>
        <Padding padding={props.padding} />
        <Row id="center" className={"marginTop marginButtom"}>
          <div className="col-4">
            <Button
              type="button"
              // onClick={onButton}
              className="t-button-primary"
              label="Continuar"
              // disabled={!isValid}
            />
          </div>
        </Row>
        <Padding padding={props.padding} />
      </Column>
    </>
  );
};

export default UnderAge;
