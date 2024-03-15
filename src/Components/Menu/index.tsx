import { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TagLogin from "../../Assets/images/taglogin.svg";
import {
  getMenuItem,
  getYear,
  menuItem,
  setYear,
} from "../../Services/localstorage";
import styles from "../../Styles";
import { Column, Padding, Row } from "../../Styles/styles";
import DropdownComponent from "../Dropdown";
import Icon from "../Icon";
import Item from "./Item";
import { Container, TopBar } from "./style";

const Menu = ({ viewdMenu }: { viewdMenu: boolean }) => {
  const [active, setActive] = useState(parseInt(getMenuItem()!));
  const [visibleModal, setVisibleModal] = useState(false);
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
          <Column id="center">
            <div
              style={{
                backgroundColor: styles.colors.colorsBaseCloudNormal,
                padding: "4px",
                cursor: "pointer",
              }}
              onClick={() => setVisibleModal(!visibleModal)}
            >
              {getYear() ? getYear() : "Sem ano"}
              <Icon icon="pi pi-angle-down" size="0.8rem" />
            </div>
          </Column>
        </Row>
      </Padding>
      {true ? (
        <Padding padding="8px">
          <Item
            text={"Cronograma"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/cronograma"}
            icon={"pi pi-calendar"}
          />
          <Padding />
          <Item
            text={"Turmas"}
            funcActiv={() => {
              setActive(2);
              menuItem("2");
            }}
            active={active === 2 ? true : false}
            path={"/turma"}
            icon={"pi pi-sitemap"}
          />
          {/* <Padding />
          <Item
            text={"Formulários"}
            funcActiv={() => {
              setActive(3);
              menuItem("3");
            }}
            active={active === 3 ? true : false}
            path={"/"}
            icon={"pi pi-list"}
          /> */}
          <Padding />
          <Item
            text={"Usuarios"}
            funcActiv={() => {
              setActive(4);
              menuItem("4");
            }}
            active={active === 4 ? true : false}
            path={"/users"}
            icon={"pi pi-users"}
          />
        </Padding>

      ) : null}
      <ModalYear
        visible={visibleModal}
        onHide={() => setVisibleModal(!visibleModal)}
      />
    </Container>
  );
};

const ModalYear = ({
  visible,
  onHide,
}: {
  visible: boolean | undefined;
  onHide(): void;
}) => {
  const years = [
    { value: 2024 },
    { value: 2023 },
    { value: 2022 },
    { value: 2021 },
  ];

  const [year, setYearState] = useState<any>();

  useEffect(() => {
    setYearState(parseInt(getYear()!))
  }, [])

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Selecione o ano"
      className="w-8 md:w-5"
    >
      <Padding />
      <div>
        <div>
          <DropdownComponent
            options={years}
            placerholder="Ano"
            onChange={(e) => {
              setYearState(e.target.value);
            }}
            optionsLabel="value"
            value={year}
          />
          {/* <div>{errors.password}</div> */}
        </div>
      </div>
      <Padding padding="16px" />
      <Column>
        <Row id="space-between" style={{ width: "100%" }}>
          <Button label="Cancelar" severity="secondary" />
          <Button
            label="Selecionar ano"
            onClick={() => {
              setYear(year.toString());

              window.location.reload();
            }}
          />
        </Row>
      </Column>
    </Dialog>
  );
};

export default Menu;
