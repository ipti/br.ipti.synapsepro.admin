import { Button } from "primereact/button";
import TextInput from "../../../Components/TextInput";
import { Container, Padding, Row } from "../../../Styles/styles";

const FormSchedule = () => {
    return (
        <Container>
            <div className="card">
                <Padding>
                    <h3>Criar cronograma</h3>
                    <Padding padding="16px" />
                    <label>Ano de referencia</label>
                    <TextInput />
                    <Padding />
                    <label>Data de inicio</label>
                    <TextInput />
                    <Padding />
                    <label>Data final</label>
                    <TextInput />
                    <Padding padding="16px" />
                    <Row id="end">
                        <Button label="Criar" />
                    </Row>

                </Padding>
            </div>
        </Container>
    )
}

export default FormSchedule;