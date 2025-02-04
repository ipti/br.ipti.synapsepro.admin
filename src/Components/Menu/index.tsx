import { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import turmasHover from "../../Assets/images/turmasPessoas.svg";
import { ROLE } from "../../Controller/controllerGlobal";
import {
  getMenuItem,
  getYear,
  menuItem,
  setYear,
} from "../../Services/localstorage";
import styles from "../../Styles";
import { Column, Padding, Row } from "../../Styles/styles";
import DropdownComponent from "../Dropdown";
import Item from "./Item";
import { Container } from "./style";

import turmas from "../../Assets/images/peoples.svg";

import tecnologia from "../../Assets/images/iconsMenu/digital_wellbeing.svg";

import tecnologia_hover from "../../Assets/images/iconsMenu/digital_wellbeing_active.svg";

import beneficiaries from "../../Assets/images/iconsMenu/diversity_4.svg";
import beneficiaries_hover from "../../Assets/images/iconsMenu/diversity_hover.svg";

import user from "../../Assets/images/iconsMenu/person.svg";
import user_hover from "../../Assets/images/iconsMenu/person_active.svg";

const Menu = ({ viewdMenu }: { viewdMenu: boolean }) => {
  const [active, setActive] = useState(parseInt(getMenuItem()!));
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <Container active={viewdMenu}>
      <Padding padding="4px" />
      <Padding padding="16px">
        <Row id="center">
          <Column id="center">
            <h2 style={{ fontFamily: styles.typography.types.bold }}>
              Synapse
            </h2>
          </Column>
          {/* <Padding />
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
          </Column> */}
        </Row>
      </Padding>
      <Padding padding="8px" />
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
          {/* <Item
            text={"Pagina Inicial"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/"}
            icon={active === 1 ? homeHover : home}
          /> */}
          {/* <Padding /> */}
          <Item
            text={"Escolas"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/escolas"}
            icon={active === 1 ? tecnologia_hover : tecnologia}
          />
          <Padding />
          <Item
            text={"Turmas"}
            funcActiv={() => {
              setActive(4);
              menuItem("4");
            }}
            active={active === 4 ? true : false}
            path={"/turma"}
            icon={active === 4 ? turmasHover : turmas}
          />
          <Padding />
          <Item
            text={"Alunos"}
            funcActiv={() => {
              setActive(5);
              menuItem("5");
            }}
            active={active === 5 ? true : false}
            path={"/alunos"}
            icon={active === 5 ? beneficiaries_hover : beneficiaries}
          />
          <Padding />
          {/* <Item
            text={"Reaplicadores"}
            funcActiv={() => {
              setActive(8);
              menuItem("8");
            }}
            active={active === 8 ? true : false}
            path={"/reaplicadores"}
            icon={active === 8 ? turmasHover : turmas}
          /> */}

          {1 === ROLE.ADMIN || 2 === ROLE.Coordenador ? (
            <Item
              text={"Professores"}
              funcActiv={() => {
                setActive(6);
                menuItem("6");
              }}
              active={active === 6 ? true : false}
              path={"/users"}
              icon={active === 6 ? user_hover : user}
            />
          ) : null}

          <Padding />

          {/* <Item
            text={"Ajuda"}
            funcActiv={() => {
              setActive(7);
              menuItem("7");
            }}
            active={active === 7 ? true : false}
            path={"/ajuda"}
            icon={active === 7 ? ajuda_hover : ajuda}
          /> */}
        </Padding>
      ) : null}
      <ModalYear visible={visibleModal} onHide={() => setVisibleModal(false)} />
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
    setYearState(parseInt(getYear()!));
  }, []);

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
