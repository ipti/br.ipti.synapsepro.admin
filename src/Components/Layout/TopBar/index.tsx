

import { Column, Padding, Row } from "../../../Styles/styles";
import LogoutTopBar from "./Logout";
import { Back, Container } from "./style";

const TopBar = () => {

    const larguraTela = window.innerWidth;


    

    return (
        <Container>
            <Column style={{ width: "auto" }} id="center">
                <Row>
                    {larguraTela < 700 ?
                        <Column id="center">
                            <i className="pi pi-bars" style={{ fontSize: '1.5rem' }} onClick={() => {}} />
                        </Column>
                        : null}
                    <Back onClick={() => {}}>
                        <i className="pi pi-angle-left" style={{ fontSize: '1.2rem' }}></i>
                        <Padding padding="2px" />
                        Voltar
                    </Back>
                    <Padding padding="2px" />
                    {/* {user?.role === "SECRETARY" ? <Column>
                        <CrasDropdown placeholder={"Unidades"} options={attendance} value={valueAttendance} optionLabel={"name"} onChange={(e) => { idAttendance(e.target.value.id);history("/"); menuItem(1); window.location.reload(); }} />
                    </Column> : null} */}
                </Row>
            </Column>
            <Column style={{ width: "auto" }} id="center">
                <LogoutTopBar />
            </Column>
        </Container>
    )
}

export default TopBar;