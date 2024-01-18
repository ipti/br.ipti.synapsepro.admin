import React from "react";
import { Column } from "../../Styles/styles";
import TopBar from "./TopBar";
import styles from "../../Styles";

const Layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <Column style={{ height: "100%" }}>
            <TopBar />
            <div style={{ overflowY: "auto", backgroundColor: styles.colors.grayClearOne, height: "100%" }}>{children}</div>
        </Column>
    )
}

export default Layout;