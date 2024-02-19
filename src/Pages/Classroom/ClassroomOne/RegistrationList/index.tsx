import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext } from "react";
import RegistartionClassroomProvider, {
  RegistrationClassroomContext,
} from "../../../../Context/Classroom/RegistrationsList/context";
import { RegistrationClassroomTypes, RegistrationType } from "../../../../Context/Classroom/RegistrationsList/type";
import { Container } from "../../../../Styles/styles";
import { Button } from "primereact/button";

const RegistrationList = () => {
  return (
    <RegistartionClassroomProvider>
      <RegistrationListPage />
    </RegistartionClassroomProvider>
  );
};

const RegistrationListPage = () => {
  const props = useContext(
    RegistrationClassroomContext
  ) as RegistrationClassroomTypes;
  const actionBodyTemplate = (rowData: RegistrationType) => {
    return (
        <>
            <Button icon="pi pi-eye" rounded className="mr-2" onClick={() => {}} />
            <Button icon="pi pi-trash" severity="danger" rounded onClick={() => {}} />
        </>
    );
};  return (
    <Container>
      <h2>Beneficiarios da Turma A</h2>
      <DataTable
        value={props.registrations}
        scrollable
        className="mt-4 card"
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
