import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { formatarData, Status } from "../../../Controller/controllerGlobal";
import { Message } from "primereact/message";

const CardMeeting = ({ title, data, status, idMeeting }: { title: string; data: string, status: string, idMeeting: number }) => {
  const history = useNavigate();

  const {id} = useParams()

  return (
    <Container className="card" onClick={() => history(`/turma/${id}/encontros/${idMeeting}`)}>
      <Row id="space-between">
        <h3>{title}</h3>
        <div className="cursor-pointer">
          <Icon icon="pi pi-trash" size="1rem" />
        </div>
      </Row>
      <Padding padding="8px" />
      <Row id="space-between">
        <Column>
          <div className={"boxDescriptionScheduleSubtitle"}>Encontro</div>
          <Padding />
          <div className={"boxYear"}>
            <Column id="center" style={{ height: "100%" }}>
              {formatarData(new Date(data))}
            </Column>
          </div>
        </Column>
        <Column>
          <div className={"boxDescriptionScheduleSubtitle"}>Status</div>
          <Padding />
          {status === Status.PENDING ? <Message severity="warn" text="Pendente" /> : status === Status.APPROVED ? <Message severity="success" text="Aprovado" /> : status === Status.REPROVED ? <Message severity="error" text="Recusado" /> :null}
        </Column>
      </Row>
    </Container>
  );
};

export default CardMeeting;
