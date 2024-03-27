import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { Container } from "./style";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useContext, useState } from "react";
import { ClassroomContext } from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";
import IconClassroom from "./../../../Assets/images/turma.svg";


const CardClassroom = ({
  title,
  year,
  id,
}: {
  title: string;
  year: string;
  id: number;
}) => {
  const history = useNavigate();
  const [visible, setVisible] = useState(false);

  const props = useContext(ClassroomContext) as ClassroomTypes;

  return (
    <>
      <Container className="card" onClick={() => history(`/turma/${id}`)}>
        <Row id="space-between">
          <Column>
            <div className={"boxYear"}><Column style={{height: "100%"}} id="center">{year}</Column></div>
          </Column>
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(true);
            }}
          >
            <Icon icon="pi pi-trash" size="1rem" />
          </div>
        </Row>
        <Padding padding="8px" />
        <Row>
          <div className={`boxQuantity`}>
            <img src={IconClassroom} alt="" style={{ height: 40 }} />
          </div>
          <Padding padding="8px" />
          <Column id="center">
            <h3>{title}</h3>
          </Column>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteClassroom(id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardClassroom;
