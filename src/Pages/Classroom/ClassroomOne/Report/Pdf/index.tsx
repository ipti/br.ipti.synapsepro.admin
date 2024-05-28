import { useParams } from "react-router-dom";
import { useFetchRequestClassroomReport } from "../../../../../Services/Classroom/query";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import { Container, Table, Td, Th } from "./style";
import {
  RegisterClassroom,
  ReportClassroomType,
} from "../../../../../Services/Classroom/type";
import { useEffect, useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "primereact/button";

const ReportClassroom = () => {
  const { id } = useParams();

  const [report, setReport] = useState<ReportClassroomType | undefined>();

  const { data } = useFetchRequestClassroomReport(parseInt(id!));

  useEffect(() => {
    if (data) {
      setReport(data);
    }
  }, [data]);

  const contentRef = useRef(null);

  const generatePDF = () => {
    if (!contentRef.current) return;

    const elementToCapture = contentRef.current;

    html2canvas(elementToCapture).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      pdf.save(`Relatorio_${report?.name}.pdf`);
    });
  };

  const bodyTotal = (rowData: RegisterClassroom) => {
    var count = 0;
    const verifyFouls = () => {
      for (const meeting of data?.meeting) {
        const verify = meeting?.fouls?.find(
          (props: any) => props.registration_fk === rowData.registration_fk
        );

        if (verify) {
          count++;
        }
      }

      return data.meeting.length !== 0
        ? ((data.meeting.length - count) / data.meeting.length) * 100
        : 0;
    };
    return { percentage: verifyFouls().toFixed(0), count: count };
  };

  return (
    <>
      <Row className="flex justify-content-end p-4">
        <Button
          type="button"
          icon="pi pi-download"
          label="Gerar PDF"
          onClick={generatePDF}
          data-pr-tooltip="PDF"
        />
      </Row>
      <Container ref={contentRef} style={{ width: "100%" }}>
        <Padding padding="16px" />
        <Row className="flex justify-content-center">
          <Column>
            {/* <h2 style={{ textAlign: "center" }}>
              TS: {report?.project.social_technology.name}
            </h2> */}
            <h3 style={{ textAlign: "center" }}>{report?.project.name}</h3>
          </Column>
        </Row>
        <Padding padding="8px" />
        <Row style={{ justifyContent: "center" }}>
          <div
            style={{ height: 1, width: "80%", backgroundColor: "black" }}
          ></div>
        </Row>
        <Padding padding="8px" />
        <Row className="flex justify-content-center">
          <h2>Relatório de frequência</h2>
        </Row>
        <Padding padding="8px" />
        <Padding padding="0 48px">
          <Table>
            <thead>
              <tr>
                <Th className="flex row justify-content-center">{report?.name}</Th>
              </tr>
            </thead>
          </Table>
          <Table>
            <thead>
              <tr>
                <Th>Beneficiarios</Th>
                <Th>Encontros</Th>
                <Th>Faltas</Th>
                <Th>Frequência</Th>
              </tr>
            </thead>
            <tbody>
              {report?.register_classroom?.map(
                (item: RegisterClassroom, index: number) => {
                  return (
                    <tr key={index}>
                      <Td>{item.registration.name}</Td>
                      <Td>{report.meeting.length}</Td>
                      <Td>{bodyTotal(item).count}</Td>
                      <Td>{bodyTotal(item).percentage}%</Td>
                    </tr>
                  );
                }
              )}

              {/* Adicione as linhas para os demais alunos aqui */}
            </tbody>
          </Table>
        </Padding>
      </Container>
    </>
  );
};

export default ReportClassroom;
