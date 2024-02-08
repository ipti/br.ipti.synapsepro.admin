import { useState } from "react";

import TagLogin from "../../Assets/images/taglogin.svg";
import { getMenuItem, menuItem } from "../../Services/localstorage";
import { Padding, Row } from "../../Styles/styles";
import Item from "./Item";
import { Container, TopBar } from "./style";




const Menu = ({ viewdMenu }: { viewdMenu: boolean }) => {

    const [active, setActive] = useState(parseInt(getMenuItem()!))

    return (
        <Container active={viewdMenu}>
            <Row>
                <TopBar style={{ backgroundColor: "#667DF4" }} />
                <TopBar style={{ backgroundColor: "#F45A5A" }} />
                <TopBar style={{ backgroundColor: "#66D654" }} />
                <TopBar style={{ backgroundColor: "#EADA48" }} />
            </Row>
            <Padding padding="16px">
                <Row id="center">
                    <img src={TagLogin} alt=""></img>
                </Row>
            </Padding>
            {
                true ? <Padding padding="8px">
                    <Item text={"Cronograma"} funcActiv={() => { setActive(1); menuItem("1") }} active={active === 1 ? true : false} path={"/cronograma"} icon={"pi pi-calendar"} />
                    <Padding />
                    <Item text={"Turmas"} funcActiv={() => { setActive(2); menuItem("2") }} active={active === 2 ? true : false} path={"/turma"} icon={"pi pi-sitemap"} />
                    <Padding />
                    <Item text={"Formulários"} funcActiv={() => { setActive(3); menuItem("3") }} active={active === 3 ? true : false} path={"/"} icon={"pi pi-list"} />

                </Padding> : null
            }

        </Container >
    )
}

export default Menu;