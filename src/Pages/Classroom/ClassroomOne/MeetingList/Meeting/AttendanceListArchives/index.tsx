import { Message } from "primereact/message"
import { Column, Padding, Row } from "../../../../../../Styles/styles"

const AttendanceList = () => {
    return (
        <Row>
            <Message severity="success" text="Lista de presença anexada" />
            <Padding padding="8px" />
            <Column id="center">
                <i className="pi pi-download cursor-pointer" />
            </Column>
            <Padding padding="8px" />
            <Column id="center">
                <i className="pi pi-trash cursor-pointer" />
            </Column>
        </Row>
    )
}

export default AttendanceList