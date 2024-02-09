import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import CardClassroom from "../../../Components/Card/CardClassroom";
import { Container, Padding, Row } from "../../../Styles/styles";

const ListClassroom = () => {

    const history = useNavigate();

    const classroom = [{
        name: "TurmaA",
        subscribe: 20,
        year: 2024
    }, {
        name: "TurmaA",
        subscribe: 20,
        year: 2024
    }, {
        name: "TurmaA",
        subscribe: 20,
        year: 2024
    }, {
        name: "TurmaA",
        subscribe: 20,
        year: 2024
    }];

    return (
        <Container>
            <Row id="end">
                <Button label="Criar turma" icon={"pi pi-plus"} onClick={() => history("/turma/criar")} />
            </Row>
            <Padding padding="16px" />
            <div className="grid ">
                {classroom.map((item, index) => {
                    return (
                        <div className="col-12 md:col-6 lg:col-4">
                            <CardClassroom title={item.name} year={item.year.toString()} />
                        </div>
                    );
                })}
            </div>
        </Container>
    )
}

export default ListClassroom