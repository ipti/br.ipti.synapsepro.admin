import { Tooltip } from "primereact/tooltip";
import { Container } from "../../../../Styles/styles";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useRef } from "react";
import Present from "../../../../Assets/images/status-approved.svg";
import NotPresent from "../../../../Assets/images/status-desapproved.svg";
import { useFetchRequestClassroomReport } from "../../../../Services/Classroom/query";
import { useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Report = () => {
  return <ReportPage />;
};

const ReportPage = () => {
  const { id } = useParams();

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

      pdf.save(`Relatorio_turma.pdf`);
    });
  };

  const { data } = useFetchRequestClassroomReport(parseInt(id!));

  const bodyMeeting = (rowData: any, options: any) => {
    const verifyFouls = () => {
      const verify = data?.meeting[
        parseInt(options?.column.props.columnKey)
      ]?.fouls?.find(
        (props: any) => props.registration_fk === rowData.registration_fk
      );
      return verify;
    };
    return <img alt="" src={!verifyFouls() ? Present : NotPresent} />;
  };

  const bodyTotal = (rowData: any) => {
    const verifyFouls = () => {
      var count = 0;
      for (const meeting of data?.meeting) {
        const verify = meeting?.fouls?.find(
          (props: any) => props.registration_fk === rowData.registration_fk
        );

        if (verify) {
          count++;
        }
      }

      return (count !== 0 ? count / data.meeting.length : 1) * 100;
    };
    return <h3>{verifyFouls()}%</h3>;
  };

  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        type="button"
        icon="pi pi-file-pdf"
        severity="danger"
        rounded
        onClick={generatePDF}
        data-pr-tooltip="PDF"
      />
    </div>
  );
  return (
    <Container ref={contentRef}>
      <DataTable
        value={data?.register_classroom}
        header={header}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field={"registration.name"}  header={"Beneficiário"} />
        {data?.meeting?.map((item: any, index: number) => (
          <Column
            align={"center"}
            key={index}
            columnKey={index.toString()}
            body={bodyMeeting}
            header={item.name}
          />
        ))}
        <Column body={bodyTotal} header={"Total"} />
      </DataTable>
    </Container>
  );
};

export default Report;
