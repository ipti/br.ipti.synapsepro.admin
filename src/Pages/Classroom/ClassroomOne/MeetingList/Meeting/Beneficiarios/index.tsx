import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MeetingListRegistrationContext } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { Padding } from "../../../../../../Styles/styles";

const Beneficiarios = () => {
  const props = useContext(
    MeetingListRegistrationContext
  ) as MeetingListRegisterTypes;
  const [selectedProducts, setSelectedProducts] = useState<any>(
    props.meeting?.classroom.registrations
  );
  const [rowClick] = useState(true);
  const history = useNavigate();

//   useEffect(() => {
//     setSelectedProducts(props.meeting?.classroom.registrations);
//   }, []);


    const {id, idMeeting} = useParams()
  return (
    <div className="card">
      <h3>Lista de presença</h3>
      <Padding padding="16px" />
      <Button
        label="Gerar Lista de presença"
        icon="pi pi-download"
        onClick={() => {
          history(`/turma/${id}/encontros/${idMeeting}/generate`);
        }}
      />
      <Padding padding="16px" />
      <span style={{color: "GrayText"}}>
        Tire a marcação de quem faltou
      </span>
      <Padding padding="8px" />

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
          <Column field="id" align="center" header="Matricula"></Column>
          <Column field="name" align="center" header="Nome"></Column>
        </DataTable>
      ) : null}
    </div>
  );
};

export default Beneficiarios;
