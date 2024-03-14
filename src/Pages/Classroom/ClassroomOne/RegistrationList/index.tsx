import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext } from "react";
import RegistartionClassroomProvider, {
  RegistrationClassroomContext,
} from "../../../../Context/Classroom/RegistrationsList/context";
import {
  RegistrationClassroomTypes,
  RegistrationType,
} from "../../../../Context/Classroom/RegistrationsList/type";
import { Container } from "../../../../Styles/styles";
import { Button } from "primereact/button";
import { Status } from "../../../../Controller/controllerGlobal";
import { useNavigate, useParams } from "react-router-dom";

const RegistrationList = () => {
  return (
    <RegistartionClassroomProvider>
      <RegistrationListPage />
    </RegistartionClassroomProvider>
  );
};

const RegistrationListPage = () => {
  const history =  useNavigate()
  const props = useContext(
    RegistrationClassroomContext
  ) as RegistrationClassroomTypes;
  const {id} = useParams()
  const actionBodyTemplate = (rowData: RegistrationType) => {
    return (
      <>
        <Button icon="pi pi-eye" rounded className="mr-2" onClick={() => history(`/turma/${id}/aluno/${rowData.id}`)} />
        <Button
          icon="pi pi-trash"
          severity="danger"
          rounded
          onClick={() => {}}
        />
      </>
    );
  };
  const actionStatusTemplate = (rowData: RegistrationType) => {
    return (
      <>
        {rowData.status === Status.APPROVED && <p>This is approved</p>}
        {rowData.status === Status.PENDING && <p>This is pending</p>}
        {rowData.status === Status.REPROVED && <p>This is reprobved</p>}
      </>
    );
  };

  return (
    <Container>
      <h2>Beneficiarios da Turma A</h2>
      <DataTable
        value={props.registrations}
        scrollable
        className="mt-4"
        paginator
        rows={10}
      >
        <Column
          field="id"
          header="Matricula"
          style={{ minWidth: "200px" }}
          align="center"
        ></Column>
        <Column
          field="name"
          header="Name"
          style={{ minWidth: "200px" }}
          align="center"
          className="font-bold"
        ></Column>
        <Column
          body={actionStatusTemplate}
          header="Ações"
          style={{ minWidth: "200px" }}
          align="center"
        ></Column>
        <Column
          body={actionBodyTemplate}
          header="Ações"
          style={{ minWidth: "200px" }}
          align="center"
        ></Column>
      </DataTable>
    </Container>
  );
};

export default RegistrationList;
