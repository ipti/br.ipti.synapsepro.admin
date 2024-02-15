

import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import LogoutTopBar from "./Logout";
import { Back, Container } from "./style";
import DropdownComponent from "../../Dropdown";
import { AplicationContext } from "../../../Context/Aplication/context";
import { useContext } from "react";
import { PropsAplicationContext, SchoolIdentification } from "../../../Types/types";
import { GetIdProject, idProject, menuItem } from "../../../Services/localstorage";

const TopBar = () => {

    const props = useContext(AplicationContext) as PropsAplicationContext

    const larguraTela = window.innerWidth;

    const verifyValueProject = (id: string) => {
        props.project?.find((props: SchoolIdentification) => props.inep_id === id)
    }


    const history = useNavigate()

    return (
        <Container>
            <Column style={{ width: "auto" }} id="center">
                <Row>
                    {larguraTela < 700 ?
                        <Column id="center">
                            <i className="pi pi-bars" style={{ fontSize: '1.5rem' }} onClick={() => { }} />
                        </Column>
                        : null}
                    <Back onClick={() => { history(-1) }}>
                        <i className="pi pi-angle-left" style={{ fontSize: '1.2rem' }}></i>
                        <Padding padding="2px" />
                        Voltar
                    </Back>
                    <Padding padding="2px" />

                </Row>
            </Column>
            <Column style={{ width: "auto" }} id="center">
                <Row>
                    <Column>
                        <DropdownComponent placerholder="Projetos" options={props.project} value={verifyValueProject(GetIdProject()!)} onChange={(e) => { idProject(e.target.value.inep_id); history("/"); menuItem("1"); window.location.reload(); }} />
                    </Column>
                    <Padding />
                    <Column id="center">
                        <LogoutTopBar />
                    </Column>
                </Row>
            </Column>
        </Container>
    )
}

export default TopBar;