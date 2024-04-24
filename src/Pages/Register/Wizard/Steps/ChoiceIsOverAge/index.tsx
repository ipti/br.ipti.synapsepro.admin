import { Button } from "primereact/button";
import { useContext } from "react";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Padding, Row } from "../../../../../Styles/styles";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const ChoiceIsOverAge = () => {


    const props = useContext(RegisterContext) as RegisterTypes;

    return (
        <>
            <Column className="contentChoiceYear" style={{height: "70vh"}} id="center">
                <Padding padding={props.padding} />
                <Row id="center">
                    <h2>Você é maior de idade?</h2>
                </Row>
                <Padding padding={props.padding} />
                <Row reverse={true} id="center">
                    <Row>
                        <Button label="Sim, tenho mais de 18 anos" onClick={() => {
                            props.setIsOverAge(true);
                            props.NextStep({})

                        }} />
                        <Padding />
                        <Button severity="secondary" label="Não, tenho menos de 18 anos" onClick={() => {
                            props.setIsOverAge(false);
                            props.NextStep({})
                        }} />
                    </Row>
                </Row>
                <Padding padding={props.padding} />
            </Column>
        </>
    );
};

export default ChoiceIsOverAge;
