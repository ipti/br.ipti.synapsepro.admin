import { Container } from "./style"
import IconSchedule from "./../../../Assets/images/calendar.png";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";


const CardSchedule = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <Container className="card">
      <Row id="space-between">
        <h3>Cronograma</h3>
        <div className="cursor-pointer">
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
    </Container>
  )
}

export default CardSchedule