import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Present from "../../../../../../Assets/images/status-approved.svg";
import NotPresent from "../../../../../../Assets/images/status-desapproved.svg";
import { MeetingListRegistrationContext } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes, RegisterClassroom } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import styles from "../../../../../../Styles";
import { Padding, Row } from "../../../../../../Styles/styles";


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
  const history = useNavigate();

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

  const { id, idMeeting } = useParams();
  return (
    <div className="card">
      <h3>Lista de presença</h3>
      <Padding padding="16px" />
      <Row id="space-between">
        <Button
          label="Salvar"
          icon="pi pi-save"
          disabled={props.meeting?.meeting_archives?.length! === 0}
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
          onClick={() => {
            history(`/turma/${id}/encontros/${idMeeting}/generate`);
          }}
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
            {/* <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column> */}
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
