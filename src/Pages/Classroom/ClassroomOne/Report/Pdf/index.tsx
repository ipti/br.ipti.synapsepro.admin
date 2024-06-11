import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../../../../Assets/images/logothp.png";
import { useFetchRequestClassroomReport } from "../../../../../Services/Classroom/query";
import {
  RegisterClassroom,
  ReportClassroomType,
} from "../../../../../Services/Classroom/type";

import imgLateral from "../../../../../Assets/images/logoleftpdf.png";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { convertImageUrlToBase64, loadImageFileAsBase64 } from "../../../../../Controller/controllerGlobal";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const ReportClassroom = () => {
  const { id } = useParams();

  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [logoBaseLeft64, setLogoBaseLeft64] = useState<string | null>(null);
  const [logoBaseRegua64, setLogoBaseRegua64] = useState<string | null>(null);

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
        console.error("Error loading logo image:", error);
      }
    };

    loadLogo();
  }, []);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const base64 = await loadImageFileAsBase64(imgLateral);
        setLogoBaseLeft64(base64);
      } catch (error) {
        console.error("Error loading logo image:", error);
      }
    };

    loadLogo();
  }, []);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        if (report?.project.ruler_url) {
          const base64 = await convertImageUrlToBase64(report?.project.ruler_url);

          setLogoBaseRegua64(base64);
        }

      } catch (error) {
        console.error("Error loading logo image:", error);
      }
    };

    loadLogo();
  }, [report]);


  // useEffect(() => {
  //   const loadLogo = async () => {
  //     try {
  //       const base64 = await loadImageFileAsBase64(imgregua);
  //       setLogoBaseRegua64(base64);
  //     } catch (error) {
  //       console.error("Error loading logo image:", error);
  //     }
  //   };

  //   loadLogo();
  // }, []);

  // const contentRef = useRef(null);

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

  // const generatePDF = () => {
  //   const pageSize = 20; // Define the number of rows per page

  //   // Function to generate the table body for a specific subset of registrations
  //   const createTableBody = (registrationsSubset: any, startIndex: number) => {
  //     return [
  //       ["Nº ", "NOME COMPLETO", "FALTAS", "FREQUÊNCIA", "STATUS"],
  //       ...registrationsSubset.map((item: any, index: number) => {
  //         return [
  //           startIndex + index + 1,
  //           item.registration.name,
  //           bodyTotal(item).count,
  //           bodyTotal(item).percentage + "%",
  //           parseInt(bodyTotal(item).percentage) >
  //           report?.project?.approval_percentage!
  //             ? "Aprovado"
  //             : "Reprovado",
  //         ];
  //       }),
  //     ];
  //   };

  //   const docDefinition: TDocumentDefinitions = {
  //     content: [
  //       {
  //         text: `${report?.project.social_technology.name}`,
  //         style: "header",
  //         alignment: "center",
  //         bold: true,
  //         marginTop: 16,
  //       },
  //       {
  //         text: `${report?.project.name}`,
  //         style: "header",
  //         alignment: "center",
  //         fontSize: 14,
  //       },
  //       {
  //         text: "Relatório de Presença",
  //         style: "header",
  //         alignment: "center",
  //         fontSize: 12,
  //         marginTop: 32,
  //       },
  //       {
  //         style: "tableExample",
  //         marginTop: 16,
  //         table: {
  //           widths: ["*", "*"],
  //           body: [["Filiação: ", `Turma: ${report?.name}`]],
  //         },
  //       },
  //       ...report?.register_classroom.reduce((acc: any, curr, index) => {
  //         if (index % pageSize === 0) {
  //           acc.push(
  //             {
  //               style: "tableExample",
  //               marginTop: 32,
  //               table: {
  //                 widths: ["3%", "52%", "10%", "20%", "15%"],
  //                 body: createTableBody(
  //                   report.register_classroom.slice(index, index + pageSize),
  //                   index
  //                 ),
  //               },
  //               pageBreak: index === 0 ? undefined : "before",
  //             },
  //             {
  //               style: "tableExample",
  //               marginTop: 16,
  //               table: {
  //                 widths: ["*"],
  //                 body: [
  //                   [
  //                     `Critério Mínimo de Aprovação: ${report?.project?.approval_percentage}%    Quantidade de Encontros: ${report?.meeting.length}    Quantidade de Alunos: ${report?.register_classroom?.length}`,
  //                   ],
  //                 ],
  //               },
  //             }
  //           );
  //         }
  //         return acc;
  //       }, []),
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 18,
  //         bold: true,
  //         margin: [0, 0, 0, 10],
  //       },
  //     },
  //     header: (currentPage, pageCount) => {
  //       return [
  //         {
  //           image: logoBase64 || "",
  //           width: 480,
  //           style: "header",
  //           alignment: "center",
  //           marginTop: 32,
  //           marginBottom: 128,
  //         },
  //         {
  //           margin: [32, 10, 0, 10],
  //           marginTop: 16,
  //           text: "Relatório de Presença",
  //         },
  //       ];
  //     },
  //     footer: (currentPage: number, pageCount: number) => {
  //       return {
  //         text: `${currentPage} de ${pageCount}`,
  //         alignment: "center",
  //         margin: [0, 0, 20, 0],
  //       };
  //     },
  //     pageMargins: [40, 60, 40, 60],
  //     background: (currentPage, pageCount) => {
  //       return {
  //         image: logoBaseLeft64 || "",
  //         width: 16,
  //         absolutePosition: { x: 8, y: 600 },
  //       };
  //     },
  //   };

  //   pdfMake.createPdf(docDefinition).open();
  // };

  const bodyMeeting = (rowData: any, meeting: any) => {
    const verifyFouls = () => {
      const verify = meeting.fouls?.find(
        (props: any) => props.registration_fk === rowData.registration_fk
      );
      return verify;
    };
    return !verifyFouls() ? "P" : "F";
  };


  const generatePDF = () => {
    const pageSize = 10; // Define the number of rows per page

    // Function to generate the table body for a specific subset of registrations
    const createTableBody = (registrationsSubset: any, startIndex: number) => {
      // Create the header row
      const headerRow = [
        "Nº",
        "NOME COMPLETO",
        ...report?.meeting.map((item: any) => item.name)!,
        "FREQUÊNCIA",
        "STATUS",
      ];

      // Create the body rows
      const bodyRows = registrationsSubset.map((item: any, index: number) => {
        return [
          startIndex + index + 1,
          item.registration.name,
          ...report?.meeting.map((meeting: any) => bodyMeeting(item, meeting))!,
          bodyTotal(item).percentage + "%",
          parseInt(bodyTotal(item).percentage) > report?.project?.approval_percentage! ? "Aprovado" : "Reprovado",
        ];
      });

      return [headerRow, ...bodyRows];
    };

    const docDefinition: TDocumentDefinitions = {
      pageOrientation: "landscape",
      content: [
        {
          text: `${report?.project.social_technology.name}`,
          style: "header",
          alignment: "center",
          bold: true,
          marginTop: 16,
        },
        {
          text: `${report?.project.name}`,
          style: "header",
          alignment: "center",
          fontSize: 14,
        },
        {
          text: "Relatório de Presença",
          style: "header",
          alignment: "center",
          fontSize: 12,
          marginTop: 32,
        },
        {
          style: "tableExample",
          marginTop: 16,
          table: {
            widths: ["*", "*"],
            body: [["Filiação: ", `Turma: ${report?.name}`]],
          },
        },
        ...report?.register_classroom.reduce((acc: any, curr, index) => {
          if (index % pageSize === 0) {
            acc.push(
              {
                style: "tableExample",
                marginTop: 32,
                table: {
                  widths: [
                    "3%",
                    "30%",
                    ...report?.meeting.map(() => "*"),
                    "11%",
                    "10%",
                  ],
                  body: createTableBody(
                    report.register_classroom.slice(index, index + pageSize),
                    index
                  ),
                },
                pageBreak: index === 0 ? undefined : "before",
              },
              {
                style: "tableExample",
                marginTop: 16,
                table: {
                  widths: ["*"],
                  body: [
                    [
                      `Critério Mínimo de Aprovação: ${report?.project?.approval_percentage}%    Quantidade de Encontros: ${report?.meeting.length}    Quantidade de Alunos: ${report?.register_classroom?.length}`,
                    ],
                  ],
                },
              }
            );
          }
          return acc;
        }, []),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
      header: (currentPage, pageCount) => {
        return [
          {
            image: logoBase64 || "",
            width: 480,
            style: "header",
            alignment: "center",
            marginTop: 32,
            marginBottom: 128,
          },
          {
            margin: [32, 10, 0, 10],
            marginTop: 16,
            text: "Relatório de Presença",
          },
        ];
      },
      footer: (currentPage, pageCount) => {
        return logoBaseRegua64 ? {
          image: logoBaseRegua64 || '',
          alignment: "center",
          margin: [0, 0, 20, 20], 
          fit: [400, 400]
        } : {
            text: `${currentPage} de ${pageCount}`,
            alignment: "center",
            margin: [0, 0, 20, 0],
          }
        },
      pageMargins: [40, 60, 40, 60],
      background: (currentPage, pageCount) => {
        return {
          image: logoBaseLeft64 || "",
          width: 16,
          absolutePosition: { x: 8, y: 600 },
        };
      },
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

  return { generatePDF };
  // (
  //   <>
  //     <Row className="flex justify-content-end p-4">
  //       <Button
  //         type="button"
  //         icon="pi pi-download"
  //         label="Gerar PDF"
  //         disabled={!logoBase64}
  //         onClick={generatePDF}
  //         data-pr-tooltip="PDF"
  //       />
  //     </Row>
  //     <Column ref={contentRef}>
  //       <Padding padding="16px" />
  //       <Row className="flex justify-content-center">
  //         <img alt="" src={img} style={{ width: "80%" }} />
  //       </Row>
  //       <Row>
  //         <Column
  //           className="flex justify-content-end"
  //           style={{ marginLeft: "32px", marginTop: "256px" }}
  //         >
  //           <img alt="" src={imgLateral} style={{ width: "80%" }} />
  //         </Column>
  //         <Container>
  //           <Padding padding="16px" />
  //           <Row className="flex justify-content-center">
  //             <Column>
  //               <h2 style={{ textAlign: "center" }}>
  //                 {report?.project.social_technology.name}{" "}
  //               </h2>
  //               <h2 style={{ textAlign: "center", fontWeight: "400" }}>
  //                 {report?.project.name.toUpperCase()}
  //               </h2>
  //             </Column>
  //           </Row>
  //           <Padding padding="16px" />
  //           <Row className="flex justify-content-center">
  //             <h3>Relatório de frequência</h3>
  //           </Row>
  //           <Padding padding="8px" />
  //           <Padding padding="0 2%">
  //             <Table>
  //               <thead>
  //                 <tr>
  //                   <Td style={{ width: "60%" }}>Facilitador: </Td>
  //                   <Td style={{ width: "40%" }}>Turma: {report?.name}</Td>
  //                 </tr>
  //               </thead>
  //             </Table>
  //             <Padding padding="8px" />
  //             <Table>
  //               <thead>
  //                 <tr>
  //                   <Th>Beneficiarios</Th>
  //                   <Th>Encontros</Th>
  //                   <Th>Faltas</Th>
  //                   <Th>Frequência</Th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 {report?.register_classroom?.map(
  //                   (item: RegisterClassroom, index: number) => {
  //                     return (
  //                       <tr key={index}>
  //                         <Td>{item.registration.name}</Td>
  //                         <Td>{report.meeting.length}</Td>
  //                         <Td>{bodyTotal(item).count}</Td>
  //                         <Td>{bodyTotal(item).percentage}%</Td>
  //                       </tr>
  //                     );
  //                   }
  //                 )}
  //               </tbody>
  //             </Table>
  //           </Padding>
  //         </Container>
  //       </Row>
  //     </Column>

  //     <Padding padding="16px" />
  //   </>
  // );
};
