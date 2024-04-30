import { useContext, useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TagLogin from "../../Assets/images/logo.svg";
import { AplicationContext } from "../../Context/Aplication/context";
import { ROLE } from "../../Controller/controllerGlobal";
import {
  getMenuItem,
  getYear,
  menuItem,
  setYear,
} from "../../Services/localstorage";
import styles from "../../Styles";
import { Column, Padding, Row } from "../../Styles/styles";
import { PropsAplicationContext } from "../../Types/types";
import DropdownComponent from "../Dropdown";
import Icon from "../Icon";
import Item from "./Item";
import { Container } from "./style";
import turmas from "../../Assets/images/turmasPessoas.svg"

import user from "../../Assets/images/personUser.svg"

const Menu = ({ viewdMenu }: { viewdMenu: boolean }) => {
  const [active, setActive] = useState(parseInt(getMenuItem()!));
  const [visibleModal, setVisibleModal] = useState(false);
  const props = useContext(AplicationContext) as PropsAplicationContext
  return (
    <Container active={viewdMenu}>
      <Padding padding="16px">
        <Row id="center">
          <Column id="center">
          <img src={TagLogin} style={{ width: "128px" }} alt=""></img>
          </Column>
          <Padding />
          <Column id="center">
            <div
              style={{
                border: `2px solid ${styles.colors.colorsBaseCloudNormal}`,
                padding: "8px 16px",
                borderRadius: "20px",
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
          {/* <Item
            text={"Cronograma"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/cronograma"}
            icon={"pi pi-calendar"}
          /> */}
          <Item
            text={"Projetos"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/projetos"}
            icon={turmas}
          />
          <Padding />
          <Item
            text={"Turmas"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/turma"}
            icon={turmas}
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
          {(props.user?.role === ROLE.ADMIN || props.user?.role === ROLE.COORDINATORS) ? <Item
            text={"Usuarios"}
            funcActiv={() => {
              setActive(2);
              menuItem("2");
            }}
            active={active === 2 ? true : false}
            path={"/users"}
            icon={user}
          /> : null}
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
