import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { formatarData, Status } from "../../../Controller/controllerGlobal";
import { Message } from "primereact/message";
import { useContext, useState } from "react";
import { MeetingListContext } from "../../../Context/Classroom/Meeting/MeetingList/context";
import { MeetingListTypes } from "../../../Context/Classroom/Meeting/MeetingList/type";
import { ConfirmDialog } from "primereact/confirmdialog";

const CardMeeting = ({
  title,
  data,
  status,
  idMeeting,
}: {
  title: string;
  data: string;
  status: string;
  idMeeting: number;
}) => {
  const history = useNavigate();
  const [visible, setVisible] = useState(false);

  const { id } = useParams();

  const props = useContext(MeetingListContext) as MeetingListTypes;

  return (
    <>
      <Container
        className="card"
        onClick={() => history(`/turma/${id}/encontros/${idMeeting}`)}
      >
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
        <Row id="space-between">
          <Column>
            <div className={"boxYear"}>
              <Column id="center" style={{ height: "100%" }}>
                <Row>
                  <p>Data: </p>
                  <Padding /> {formatarData(data)}
                </Row>
              </Column>
            </div>
          </Column>
          <Column>
            {status === Status.PENDING ? (
              <Message severity="warn"  />
            ) : status === Status.APPROVED ? (
              <Message severity="success" />
            ) : status === Status.REPROVED ? (
              <Message severity="error" />
            ) : null}
          </Column>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteMeeting(idMeeting)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardMeeting;
