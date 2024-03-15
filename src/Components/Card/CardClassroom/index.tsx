import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { Container } from "./style";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useContext, useState } from "react";
import { ClassroomContext } from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";

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
          <h3>{title}</h3>
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
        <Column>
          <div className={"boxDescriptionScheduleSubtitle"}>Turma</div>
          <Padding />
          <div className={"boxYear"}>{year}</div>
        </Column>
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
