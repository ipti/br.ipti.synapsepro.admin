import { Message } from "primereact/message"
import { Column, Padding, Row } from "../../../../../../Styles/styles"
import { useState } from "react"
import { InputText } from "primereact/inputtext"

const UploadArchivesAttendanceList = () => {
    const [isInput, setIsInput] = useState(false)
    return (
        <>
            <Row>
                <Message severity="warn" text="Anexe lista de presença" />
                <Padding padding="8px" />
                <Column id="center">
                    <i className="pi pi-upload cursor-pointer" onClick={() => setIsInput(true)} />
                </Column>
            </Row>
            <Padding />
            {isInput ? <InputText type="file" /> : null
            }        </>
    )
}

export default UploadArchivesAttendanceList;