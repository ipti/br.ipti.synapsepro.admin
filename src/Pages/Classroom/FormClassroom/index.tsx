import { Button } from "primereact/button";
import TextInput from "../../../Components/TextInput";
import { Container, Padding, Row } from "../../../Styles/styles";

const FormClassroom = () => {
    return (
        <Container>
            <div className="card">
                <Padding>
                    <h3>Criar turma</h3>
                    <Padding padding="16px" />
                    <label>Nome</label>
                    <TextInput />
                    <Padding />
                    <Padding padding="16px" />
                    <Row id="end">
                        <Button label="Criar" />
                    </Row>

                </Padding>
            </div>
        </Container>
    )
}

export default FormClassroom;