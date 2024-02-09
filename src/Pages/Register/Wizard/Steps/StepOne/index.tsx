import { Button } from "primereact/button";
import DropdownComponent from "../../../../../Components/Dropdown";
import TextInput from "../../../../../Components/TextInput";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import RadioButtonComponent from "../../../../../Components/RadioButton";

const StepOne = () => {

    return (
        <>
            <Column className="contentStart" id="center">

                <Row id="center">
                    <div className="col-12 md:col-4">
                        <Row id="start">
                            <label>Name *</label>
                        </Row>
                        <div className="p-1" />
                        <TextInput placeholder="Name *" />
                        <Padding padding="16px" />
                        <Row id="start">
                            <label>Cor/Raça *</label>
                        </Row>
                        <div className="p-1" />

                        <DropdownComponent placerholder="Cor/Raça *" />
                        <Padding padding="16px" />
                        <Row id="start">
                            <label>Possui Deficiência? *</label>
                        </Row>
                        <div className="p-1" />
                        <Row className="gap-2">
                            <RadioButtonComponent label="Sim" />
                            <RadioButtonComponent label="Não" />
                        </Row>
                        <Padding padding="16px" />
                        <Row id="start">
                            <label>Você tem 18 anos ou mais? *</label>
                        </Row>
                        <div className="p-2" />

                        <RadioButtonComponent label="Sim, tenho 18 anos ou mais" />
                        <div className="p-2" />

                        <RadioButtonComponent label="Não, ainda não completei 18 anos" />
                        <div className="p-2" />
                    </div>
                </Row>
                <div className="col-12">

                </div>
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
