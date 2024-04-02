import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MeetingListRegistrationContext } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { Padding, Row } from "../../../../../../Styles/styles";
import styled from "styled-components";
import styles from "../../../../../../Styles";

const StyleComponent = styled.div`
  .p-datatable .p-datatable-tbody > tr.p-highlight {
    background: #fea0a1;
    color: ${styles.colors.colorsBaseInkNormalActive};
    font-weight: 500;
  }
  .p-checkbox .p-checkbox-box.p-highlight {
    border-color: ${styles.colors.red};
    background: ${styles.colors.red};
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

  const { id, idMeeting } = useParams();
  return (
    <div className="card">
      <h3>Lista de presença</h3>
      <Padding padding="16px" />
      <Row id="space-between">
        <Button
          label="Salvar"
          icon="pi pi-save"
          onClick={() => {
            props.CreateFouls({
              meeting: props.meeting?.id!,
              registration: FilterId(selectedProducts),
            });
          }}
        />
        <Button
          label="Gerar Lista de presença"
          icon="pi pi-download"
          onClick={() => {
            history(`/turma/${id}/encontros/${idMeeting}/generate`);
          }}
        />
      </Row>
      <Padding padding="16px" />
      <span style={{ color: "GrayText" }}>Marque quem faltou</span>
      <Padding padding="8px" />
      <StyleComponent>
        {props.meeting?.classroom.registrations ? (
          <DataTable
            value={props.meeting?.classroom.registrations}
            selectionMode={rowClick ? null : "checkbox"}
            selection={selectedProducts}
            onSelectionChange={(e: any) => setSelectedProducts(e.value)}
            dataKey="id"
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column field="name" align="center" header="Nome"></Column>
          </DataTable>
        ) : null}
      </StyleComponent>
    </div>
  );
};

export default Beneficiarios;
