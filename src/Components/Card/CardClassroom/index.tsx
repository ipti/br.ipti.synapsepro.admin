import { Container } from "./style"
import IconSchedule from "./../../../Assets/images/calendar.png";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";


const CardClassroom = ({ title, year }: { title: string, year: string }) => {
    return (
        <Container className="card">
            <Row id="space-between">
                <h3>{title}</h3>
                <div className="cursor-pointer">
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
    )
}

export default CardClassroom