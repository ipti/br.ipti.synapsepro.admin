import { Button } from "primereact/button";
import { Container, Padding, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import CardSchedule from "../../../Components/Card/CardSchedule";

const ListSchedule = () => {

    const history = useNavigate();

    const schedule = [{

    }, {}, {}, {}];

    return (
        <Container>
            <Row id="end">
                <Button label="Criar cronograma" icon={"pi pi-plus"} onClick={() => history("/cronograma/criar")} />
            </Row>
            <Padding padding="16px" />
            <div className="grid ">
                {schedule.map((item, index) => {
                    return (
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="card">
                                <CardSchedule title="xnkjxnjnx" subtitle="s k s" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    )
}

export default ListSchedule