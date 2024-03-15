import { Button } from "primereact/button";
import { Container, Padding, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import CardSchedule from "../../../Components/Card/CardSchedule";
import ScheduleProvider, { ScheduleContext } from "../../../Context/Schedule/context";
import { useContext } from "react";
import { ScheduleTypes } from "../../../Context/Schedule/type";
import { formatarData } from "../../../Controller/controllerGlobal";

const ListSchedule = () => {
    return (
        <ScheduleProvider>
            <ListSchedulePage />
        </ScheduleProvider>
    )
}


const ListSchedulePage = () => {

    const history = useNavigate();

    const props = useContext(ScheduleContext) as ScheduleTypes



    return (
        <Container>
            <Row id="end">
                <Button label="Criar cronograma" icon={"pi pi-plus"} onClick={() => history("/cronograma/criar")} />
            </Row>
            <Padding padding="16px" />
            <div className="grid ">
                {props.scheduleList?.map((item, index) => {
                    return (
                        <div className="col-12 md:col-6 lg:col-4">
                            <CardSchedule id={item.id} title={`Periodo de inscrições`}  subtitle={`${formatarData(new Date(item.start_date))} - ${formatarData(new Date(item.end_date))}`} />
                        </div>
                    );
                })}
            </div>
        </Container>
    )
}

export default ListSchedule