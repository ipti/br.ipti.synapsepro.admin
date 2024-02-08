import React from "react";
import { Column, Row } from "../../Styles/styles";
import TopBar from "./TopBar";
import styles from "../../Styles";
import Menu from "../Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <Column style={{ height: "100%" }}>
            <Row style={{ height: "100%" }}>
                <Menu viewdMenu />
                <Column style={{ width: "100%" }}>
                    <TopBar />
                    <div style={{ overflowY: "auto",  height: "100%" }}>{children}</div>
                </Column>
            </Row>
        </Column>
    )
}

export default Layout;