import { Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import DropdownComponent from "../../../../../Components/Dropdown";
import RadioButtonComponent from "../../../../../Components/RadioButton";
import TextInput from "../../../../../Components/TextInput";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Padding, Row } from "../../../../../Styles/styles";

const StepOne = () => {
  const props = useContext(RegisterContext) as RegisterTypes;

  return (
    <>
      <Formik initialValues={props.initialState} onSubmit={props.NextStep}>
        {({ values, handleChange }) => {
          return (
            <form onSubmit={props.NextStep}>
              <Column className="contentStart" id="center">
                <Row id="center">
                  <div className="col-12 md:col-4">
                    <Padding />
                    <div>
                      <label>CPF *</label>
                      <Padding />
                      <TextInput
                        placeholder="CPF *"
                        name="cpf"
                        value={values.cpf}
                        onChange={handleChange}
                      />
                    </div>
                    <Padding padding={props.padding} />
                    <div>
                      <label>Name *</label>
                      <Padding />
                      <TextInput placeholder="Name *" name="name" onChange={handleChange} value={values.name} />
                    </div>
                    <Padding padding={props.padding} />
                    <div>
                      <label>Cor/Raça *</label>
                      <Padding />
                      <DropdownComponent placerholder="Cor/Raça *" />
                    </div>
                    <Padding padding={props.padding} />
                    <div>
                      <label>Possui Deficiência? *</label>
                      <Padding />
                      <Row className="gap-2">
                        <RadioButtonComponent label="Sim" />
                        <RadioButtonComponent label="Não" />
                      </Row>
                    </div>
                    <Padding padding={props.padding} />
                    <div>
                      <label>Você tem 18 anos ou mais? *</label>
                      <Padding />
                      <RadioButtonComponent label="Sim, tenho 18 anos ou mais" checked={props.isOverAge} onChange={() => props.setIsOverAge(true)} />
                      <Padding />
                      <RadioButtonComponent label="Não, ainda não completei 18 anos" checked={props.isOverAge === false} onChange={() => props.setIsOverAge(false)} />
                    </div>
                  </div>
                </Row>
                <Padding padding={props.padding} />
                <Row id="center" className={"marginTop marginButtom"}>
                  <div className="col-4">
                    <Button
                      type="submit"
                      // onClick={onButton}
                      className="t-button-primary"
                      label="Continuar"
                      // disabled={!isValid}
                    />
                  </div>
                </Row>
                <Padding padding={props.padding} />
              </Column>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default StepOne;
