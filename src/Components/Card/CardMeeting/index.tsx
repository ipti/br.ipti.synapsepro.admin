import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";

const CardMeeting = ({ title, data }: { title: string, data: string }) => {

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
                <div className={"boxDescriptionScheduleSubtitle"}>Encontro</div>
                <Padding />
                <div className={"boxYear"}><Column id="center" style={{height: "100%"}}>{data}</Column></div>
            </Column>
        </Container>
    )
}

export default CardMeeting;

