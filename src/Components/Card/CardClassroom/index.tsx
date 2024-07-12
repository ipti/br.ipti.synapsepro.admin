import { ConfirmDialog } from "primereact/confirmdialog";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClassroomContext } from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";
import { Column, Padding, Row } from "../../../Styles/styles";
import IconClassroom from "./../../../Assets/images/cardturmas.svg";
import { Container } from "./style";
import Icon from "../../Icon";

import pessoas from "../../../Assets/images/pessoasgray.svg";
import meeting from "../../../Assets/images/school_teacher.svg";
import styles from "../../../Styles";
import { AplicationContext } from "../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../Types/types";
import { ROLE } from "../../../Controller/controllerGlobal";
import { menuItem } from "../../../Services/localstorage";

const CardClassroom = ({
  title,
  meetingCount,
  registrationCount,
  id,
}: {
  title: string;
  meetingCount?: number;
  registrationCount?: number;
  id: number;
}) => {
  const history = useNavigate();
  const [visible, setVisible] = useState(false);

  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;

  const props = useContext(ClassroomContext) as ClassroomTypes;

  return (
    <>
      <Container
        className="card"
        onClick={() => {
          menuItem("4");
          history(`/turma/${id}`);
        }}
      >
        <Row id="space-between">
          <Row>
            <div className={`boxQuantity`}>
              <img src={IconClassroom} alt="" style={{ height: 32 }} />
            </div>
            <Padding padding="4px" />
            <Column id="center">
              <h3>{title}</h3>
            </Column>
          </Row>
          {(1 === ROLE.ADMIN ||
            2 === ROLE.Coordenador) && (
            <div
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setVisible(true);
              }}
            >
              <Icon
                icon="pi pi-trash"
                color={styles.colors.colorGrayElephant}
                size="1rem"
                fontWeight="900"
              />
            </div>
          )}
        </Row>
        <Padding padding="8px" />
        <Row style={{ gap: 16 }}>
          <Row style={{ gap: 8, alignItems: "center" }}>
            <img src={pessoas} alt="" style={{ width: 24 }} />
            <p>Alunos: {registrationCount}</p>
          </Row>
          <Row style={{ gap: 8, alignItems: "center" }}>
            <img src={meeting} alt="" style={{ width: 19 }} />
            <p>Encontros: {meetingCount}</p>
          </Row>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteClassroom(id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardClassroom;
