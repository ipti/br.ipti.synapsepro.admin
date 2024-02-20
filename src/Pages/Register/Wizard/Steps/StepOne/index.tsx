import { Button } from "primereact/button";
import DropdownComponent from "../../../../../Components/Dropdown";
import TextInput from "../../../../../Components/TextInput";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import RadioButtonComponent from "../../../../../Components/RadioButton";
import { useContext } from "react";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";

const StepOne = () => {

    const props = useContext(RegisterContext) as RegisterTypes

    return (
        <>
            <Column className="contentStart" id="center">

                <Row id="center">
                    <div className="col-12 md:col-4">
                        <Padding />
                        <div>
                            <label>CPF *</label>
                            <Padding />
                            <TextInput placeholder="CPF *" />
                        </div>
                        <Padding padding={props.padding} />
                        <div>
                            <label>Name *</label>
                            <Padding />
                            <TextInput placeholder="Name *" />
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
                            <RadioButtonComponent label="Sim, tenho 18 anos ou mais" />
                            <Padding />
                            <RadioButtonComponent label="Não, ainda não completei 18 anos" />
                        </div>
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
            </Column>
        </>
    );
};

export default StepOne;
