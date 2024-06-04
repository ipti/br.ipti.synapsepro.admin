import { useParams } from "react-router-dom";
import { useFetchRequestClassroomReport } from "../../../../../Services/Classroom/query";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import { Container, Table, Td, Th } from "./style";
import {
  RegisterClassroom,
  ReportClassroomType,
} from "../../../../../Services/Classroom/type";
import { useEffect, useRef, useState } from "react";
import img from "../../../../../Assets/images/logothp.png";
import imgLateral from "../../../../../Assets/images/lateralFile.svg";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "primereact/button";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { loadImageFileAsBase64 } from "../../../../../Controller/controllerGlobal";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ReportClassroom = () => {
  const { id } = useParams();

  const [logoBase64, setLogoBase64] = useState<string | null>(null);


  const [report, setReport] = useState<ReportClassroomType | undefined>();

  const { data } = useFetchRequestClassroomReport(parseInt(id!));

  useEffect(() => {
    if (data) {
      setReport(data);
    }
  }, [data]);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const base64 = await loadImageFileAsBase64(img);
        setLogoBase64(base64);
      } catch (error) {
        console.error('Error loading logo image:', error);
      }
    };

    loadLogo();
  }, [])

  console.log(logoBase64)

  const contentRef = useRef(null);

  // const generatePDF = () => {
  //   if (!contentRef.current) return;

  //   const elementToCapture = contentRef.current;

  //   html2canvas(elementToCapture).then((canvas) => {
  //     const pdf = new jsPDF("p", "mm", "a4");

  //     const imgData = canvas.toDataURL("image/png");
  //     const imgWidth = 210;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  //     pdf.save(`Relatorio_${report?.name}.pdf`);
  //   });
  // };

  const generatePDF = () => {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: `${report?.project.social_technology.name}`, style: 'header', alignment: 'center', bold: true
        },
        {
          text: `${report?.project.name}`, style: 'header', alignment: 'center', fontSize: 14
        },
        {
          text: "Relatório de Presença", style: 'header', alignment: 'center', fontSize: 12, marginTop: 32
        },
        {
          style: 'tableExample',
          marginTop: 16,
          table: {
            widths: ['*', '*'],
            body: [
              ['Filiação: ', `Turma: ${report?.name}`],

            ]
          }
        },
        {
          style: 'tableExample',
          marginTop: 16,
          table: {
            widths: ['3%', '52%', '10%', '20%', '15%'],
            body: [
              ['Nº ', 'NOME COMPLETO', 'FALTAS', 'FREQUÊNCIA', 'STATUS'],
              ['1', 'Jonny Walker Paulino de Menezes', '3', '70%', 'Aprovado'],

            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      },
      header: [{
        image: logoBase64 || '',
        width: 480,
        style: 'header',
        alignment: 'center',
        margin: [32, 10, 0, 10],
      }, {
        margin: [32, 10, 0, 10],
        marginTop: 16,
        text: "Relatório de Presença"
      }],
      footer: (currentPage: number, pageCount: number) => {
        return {
          text: `${currentPage} of ${pageCount}`,
          alignment: 'right',
          margin: [0, 0, 20, 0]
        };
      },
      pageMargins: [40, 60, 40, 60]
    };

    pdfMake.createPdf(docDefinition).open();
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
          disabled={!logoBase64}
          onClick={generatePDF}
          data-pr-tooltip="PDF"
        />
      </Row>
      <Column ref={contentRef}>
        <Padding padding="16px" />
        <Row className="flex justify-content-center">
          <img alt="" src={img} style={{ width: "80%" }} />
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
