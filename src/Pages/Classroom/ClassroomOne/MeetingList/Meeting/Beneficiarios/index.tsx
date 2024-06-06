import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import imgLateral from "../../../../../../Assets/images/logoleftpdf.png";
import img from "../../../../../../Assets/images/logothp.png";
import Present from "../../../../../../Assets/images/status-approved.svg";
import NotPresent from "../../../../../../Assets/images/status-desapproved.svg";
import { MeetingListRegistrationContext } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes, RegisterClassroom } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { Status, loadImageFileAsBase64 } from "../../../../../../Controller/controllerGlobal";
import styles from "../../../../../../Styles";
import { Padding, Row } from "../../../../../../Styles/styles";
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const StyleComponent = styled.div`
  .p-datatable .p-datatable-tbody > tr > td {
    font-weight: 500;
    color: ${styles.colors.colorsBaseInkNormalActive};
  }
`;

const Beneficiarios = () => {
  const props = useContext(
    MeetingListRegistrationContext
  ) as MeetingListRegisterTypes;


  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [logoBaseLeft64, setLogoBaseLeft64] = useState<string | null>(null);

  const FilterRegistration = (fouls: any) => {
    const array = [];
    for (const foul of fouls) {
      array.push(foul.registration);
    }
    return array;
  };



  const [selectedProducts, setSelectedProducts] = useState<any>(
    FilterRegistration(props.meeting?.fouls)
  );
  const [rowClick] = useState(true);
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

  const FilterId = (fouls: any) => {
    const array = [];
    for (const foul of fouls) {
      array.push(foul.id);
    }
    return array;
  };

  const bodyRegisterFouls = (dataRow: RegisterClassroom) => {
    return (
      <Row id="center">
        {!selectedProducts.find((props: any) => props.id === dataRow.registration.id) ? <img alt="" style={{ cursor: "pointer" }} src={Present} onClick={() => {
          setSelectedProducts((prevArray: any) =>
            prevArray.concat(dataRow.registration)
          );
        }} /> : <img alt="" style={{ cursor: "pointer" }} src={NotPresent} onClick={() => {
          const novoArray = selectedProducts.filter(
            (obj: any) => obj.id !== dataRow.registration.id
          );
          setSelectedProducts(novoArray);
        }} />}




      </Row>
    );
  };

  const generatePDF = () => {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: `${props.meeting?.classroom.project.name}`,
          style: "header",
          alignment: "center",
          bold: true,
          marginTop: 16,
        },
        {
          text: `${props.meeting?.name}`,
          style: "header",
          alignment: "center",
          fontSize: 14,
        },
        {
          text: "Lista de Presença",
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
            body: [["Data: ", `Turma: ${props.meeting?.classroom?.name}`]],
          },
        },
        {
          style: "tableExample",
          marginTop: 16,
          table: {
            widths: ["3%", "50%", "47%"],
            body: [
              ["Nº ", "NOME COMPLETO", "ASSINATURA"],
              ...props.meeting?.classroom.register_classroom.map((item, index) => {
                return [
                  index + 1,
                  item.registration.name,
                  ""
                ];
              })!,
            ],
          },
        },
        {
          image: logoBaseLeft64 || '',
          width: 16,
          absolutePosition: { x: 8, y: 600 },
          style: "fixedText",
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
      header: [
        {
          image: logoBase64 || "",
          width: 480,
          alignment: "center",
          marginTop: 32,
          marginBottom: 128
        },
      ],
      footer: (currentPage: number, pageCount: number) => {
        return {
          text: `${currentPage} de ${pageCount}`,
          alignment: "center",
          margin: [0, 0, 20, 0],
        };
      },
      pageMargins: [40, 60, 40, 60],
    };

    pdfMake.createPdf(docDefinition).open();
  };


  return (
    <div className="card">
      <h3>Lista de presença</h3>
      <Padding padding="16px" />
      <Row id="space-between">
        <Button
          label="Salvar"
          icon="pi pi-save"
          disabled={props.meeting?.meeting_archives?.length! === 0 || props.meeting?.status === Status.APPROVED}
          onClick={() => {
            props.CreateFouls({
              meeting: props.meeting?.id!,
              registration: FilterId(selectedProducts),
            });
          }}
        />
        <Button
          label={window.innerWidth > 600 ? "Gerar Lista de presença" : ""}
          icon="pi pi-download"
          onClick={generatePDF}
        />
      </Row>
      <Padding padding="16px" />
      <StyleComponent>
        {props.meeting?.classroom.register_classroom ? (
          <DataTable
            value={props.meeting?.classroom.register_classroom}
            selectionMode={rowClick ? null : "checkbox"}
            selection={selectedProducts}
            onSelectionChange={(e: any) => setSelectedProducts(e.value)}
            dataKey="id"
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage="Não há alunos registrados"
          >
            <Column field="registration.name" align="center" header="Nome"></Column>
            <Column
              body={bodyRegisterFouls}
              align="center"
              header="Presença"
            ></Column>
          </DataTable>
        ) : null}
      </StyleComponent>
    </div>
  );
};

export default Beneficiarios;
