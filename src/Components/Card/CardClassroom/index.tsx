import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import { Container } from "./style";


const CardClassroom = ({ title, year }: { title: string, year: string }) => {
    const history = useNavigate()
    return (
        <Container className="card" onClick={() => history("/turma/1")}>
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