import { Column, Padding, Row } from "../../../../../../../Styles/styles"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useContext, useRef } from "react";
import { Container, Table, Td, Th } from "./styled";
import MeetingListRegistrationProvider, { MeetingListRegistrationContext } from "../../../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";

const AttendanceListGenerate = () => {
    return (
        <MeetingListRegistrationProvider>
            <AttendanceListGeneratePage />
        </MeetingListRegistrationProvider>
    )
}

const AttendanceListGeneratePage = () => {


    const contentRef = useRef(null);

    const generatePDF = () => {
        if (!contentRef.current) return;

        const elementToCapture = contentRef.current;


        html2canvas(elementToCapture).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save(`Lista_de_presenca.pdf`);
        });
    };

    return (
        <div style={{ overflowY: "scroll", position: "relative", height: "100vh" }}>
            <Padding padding="32px 16px">
                <button style={{ padding: "8px", cursor: "pointer" }} onClick={generatePDF}><Row><Column id='center'><i className='pi pi-print' /></Column> <Padding padding="2px" /><h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Gerar PDF</h3></Row></button>
            </Padding>
            <div ref={contentRef}>
                <Padding padding="32px">
                    <List />
                </Padding>
            </div>
        </div>
    )
}


const List = () => {
    const props = useContext(MeetingListRegistrationContext) as MeetingListRegisterTypes
    return (
        <Container>
            <p>Lista de chamada - Encontro I - Turma A</p>
            <Padding />
            <p>Data: 22/02/2024</p>
            <Padding padding="16px" />
            <Table>
                <thead>
                    <tr>
                        <Th style={{ width: "10%" }}>Nº</Th>
                        <Th style={{ width: "40%" }}>Nome</Th>
                        <Th>Assinatura   </Th>
                    </tr>
                </thead>
                <tbody>
                    {props.registrations?.map((item, index) => {
                        return (

                            <tr>
                                <Td style={{ textAlign: "center" }}>{index + 1}</Td>
                                <Td>{item.name}</Td>
                                <Td></Td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default AttendanceListGenerate