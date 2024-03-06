

import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import LogoutTopBar from "./Logout";
import { Back, Container } from "./style";
import DropdownComponent from "../../Dropdown";
import { AplicationContext } from "../../../Context/Aplication/context";
import { useContext } from "react";
import { PropsAplicationContext, SchoolIdentification } from "../../../Types/types";
import { GetIdProject, idProject, menuItem } from "../../../Services/localstorage";

const TopBar = ({setViewdMenu, viewdMenu}: {viewdMenu: boolean, setViewdMenu: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const props = useContext(AplicationContext) as PropsAplicationContext


    const verifyValueProject = (id: string) => {
        return props.project?.find((props: SchoolIdentification) => props.inep_id === id)
    }

    const history = useNavigate()

    return (
        <Container>
            <Column style={{ width: "auto" }} id="center">
            
                <Row>
                        <Column id="center" className="iconResponsive">
                            <i className="pi pi-bars cursor-pointer" style={{ fontSize: '1.5rem' }} onClick={() => setViewdMenu(!viewdMenu)} />
                        </Column>
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
                    <Column className="w-12rem md:w-16rem">
                        <DropdownComponent  placerholder="Projetos" options={props.project} value={verifyValueProject(GetIdProject()!)} onChange={(e) => { idProject(e.target.value.inep_id); history("/"); menuItem("1"); window.location.reload(); }} />
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