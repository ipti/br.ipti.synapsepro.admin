import { Container } from "./style"
import IconSchedule from "./../../../Assets/images/calendar.png";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { useContext, useState } from "react";
import { ScheduleContext } from "../../../Context/Schedule/context";
import { ScheduleTypes } from "../../../Context/Schedule/type";
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from "react-router-dom";

const CardSchedule = ({ title, subtitle, id }: { title: string, subtitle: string, id: number }) => {
  const props = useContext(ScheduleContext) as ScheduleTypes
  const [visible, setVisible] = useState(false)
  const history = useNavigate()

  return (
    <Container className="card cursor:pointer" onClick={() => {history(`/cronograma/${id}`)}}>
      <Row id="space-between">
        <h3>Cronograma</h3>
        <div className="cursor-pointer" onClick={() => setVisible(true)}>
          <Icon icon="pi pi-trash" size="1rem" />
        </div>
      </Row>
      <Padding padding="8px" />
      <Row>
        <div
          className={`boxQuantity`}
        >
          <img src={IconSchedule} alt="" style={{ height: 40 }} />
        </div>
        <Padding />
        <Column>
          <div className={"boxDescriptionSchedule"}>{title}</div>
          <Padding />
          <div className={"boxDescriptionScheduleSubtitle"}>{subtitle}</div>
        </Column>
      </Row>
      <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
        header="Confirmation" icon="pi pi-exclamation-triangle" accept={() => props.DeleteSchedule(id)} reject={() => setVisible(false)} />
    </Container>
  )
}

export default CardSchedule