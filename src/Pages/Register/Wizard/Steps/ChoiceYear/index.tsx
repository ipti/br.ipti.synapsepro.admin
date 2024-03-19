import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";
import homeImg from "../../../../../Assets/images/Capelo.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import ImageTextSteps from "../../ImageTextStpes";
import { getYear } from "../../../../../Services/localstorage";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const ChoiceYear = () => {

    const [year, setYear] = useState<number | undefined>()

    useEffect(() => {
        setYear(parseInt(getYear()!))
    }, [])

    const props = useContext(RegisterContext) as RegisterTypes;

    return (
        <>
            <Column className="contentChoiceYear" id="center">
                <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p style={{ textAlign: "center" }}>Bem-vindo ao Matrícula online, para <br /> iniciar escolha o ano
                    e clique no botão abaixo</p>} />
                <Row id="center">
                    <div className="col-12 md:col-4">
                        <DropdownComponent placerholder="Escolha o Ano" onChange={(e) => { setYear(e.target.value); setYear(e.target.value) }} options={[2024, 2023, 2022, 2021, 2020]} optionsLabel="" value={year} />
                    </div>
                </Row>
                <Padding padding={props.padding} />
                <Row id="center" className={"marginTop marginButtom"}>
                    <div className="col-4">
                        <Button
                            type="button"
                            onClick={() => {
                                props.NextStep({})
                            }}
                            className="t-button-primary"
                            label="Iniciar"
                        // disabled={!isValid}
                        />
                    </div>
                </Row>
            </Column>
        </>
    );
};

export default ChoiceYear;
