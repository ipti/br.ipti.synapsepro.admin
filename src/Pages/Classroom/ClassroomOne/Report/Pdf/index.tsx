import { useParams } from "react-router-dom";
import { useFetchRequestClassroomReport } from "../../../../../Services/Classroom/query";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import { Container, Table, Td, Th } from "./style";
import {
  RegisterClassroom,
  ReportClassroomType,
} from "../../../../../Services/Classroom/type";
import { useEffect, useRef, useState } from "react";
import img from "../../../../../Assets/images/thplogo.svg";
import imgLateral from "../../../../../Assets/images/lateralFile.svg";

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
  
  const generatePDF = async () => {
    if (!contentRef.current) return;
    const input: any = contentRef.current;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const footerHeight = 20; // Altura do rodapé
    let position = 0;

    // Função para adicionar o rodapé
    const addFooter = (pdf: any, pageNumber: any) => {
      pdf.setFontSize(10);
      pdf.text(`Página ${pageNumber}`, pdfWidth - 30, pdfHeight - 10); // Ajuste a posição e o conteúdo do rodapé
    };

    // Capturar e dividir o conteúdo em múltiplas páginas
    const pages = [];
    let currentPage = 1;
    let canvasHeightLeft = input.offsetHeight;

    while (canvasHeightLeft > 0) {
      const canvas = await html2canvas(input, {
        scrollY: -position,
        height: pdfHeight,
      });
      const imgData = canvas.toDataURL('image/png');

      pages.push({
        image: imgData,
        pageNumber: currentPage,
      });

      position += pdfHeight - footerHeight;
      canvasHeightLeft -= pdfHeight - footerHeight;
      currentPage++;
    }

    // Adicionar cada página ao PDF
    pages.forEach((page, index) => {
      if (index > 0) pdf.addPage();
      pdf.addImage(page.image, 'PNG', 0, 0, pdfWidth, pdfHeight - footerHeight);
      addFooter(pdf, page.pageNumber);
    });

    pdf.save('document.pdf');
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
      <Column ref={contentRef}>
        <Padding padding="16px" />
        <Row className="flex justify-content-center">
          <img alt="" src={img} style={{ width: 720 }} />
        </Row>
        <Row>
          <Column
            className="flex justify-content-end"
            style={{ marginLeft: "32px", marginTop: "256px" }}
          >
            <img alt="" src={imgLateral} style={{ width: "80%" }} />
          </Column>
          <Container>
            <Padding padding="16px" />
            <Row className="flex justify-content-center">
              <Column>
                <h2 style={{ textAlign: "center" }}>
                  {report?.project.social_technology.name}{" "}
                </h2>
                <h2 style={{ textAlign: "center", fontWeight: "400" }}>
                  {report?.project.name.toUpperCase()}
                </h2>
              </Column>
            </Row>
            <Padding padding="16px" />
            <Row className="flex justify-content-center">
              <h3>Relatório de frequência</h3>
            </Row>
            <Padding padding="8px" />
            <Padding padding="0 2%">
              <Table>
                <thead>
                  <tr>
                    <Td style={{ width: "60%" }}>Facilitador: </Td>
                    <Td style={{ width: "40%" }}>Turma: {report?.name}</Td>
                  </tr>
                </thead>
              </Table>
              <Padding padding="8px" />
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
                </tbody>
              </Table>
            </Padding>
          </Container>
        </Row>
      </Column>

      <Padding padding="16px" />
    </>
  );
};

export default ReportClassroom;
