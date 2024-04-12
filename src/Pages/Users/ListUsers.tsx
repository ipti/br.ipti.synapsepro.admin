import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersProvider, { UsersContext } from "../../Context/Users/context";
import { UsersTypes } from "../../Context/Users/type";
import { Container, Padding } from "../../Styles/styles";
import { ROLE } from "../../Controller/controllerGlobal";
import Loading from "../../Components/Loading";

const ListUsers = () => {
  return (
    <UsersProvider>
      <ListUsersPage />
    </UsersProvider>
  );
};

const ListUsersPage = () => {
  const props = useContext(UsersContext) as UsersTypes;
  const history = useNavigate();
  // const actionBodyTemplate = (rowData: any) => {

  //     return (
  //         <Row id='end'>
  //             {/* <Button icon="pi pi-pencil" rounded className="mr-2" onClick={() => { history("/users/" + rowData.id) }} /> */}
  //             <Button icon="pi pi-trash" rounded type="button" severity="danger" onClick={() => { props.DeleteUser(rowData.id) }} />
  //         </Row>
  //     );
  // };

  const typeUserBody = (rowData: any) => {
    return (
      <p>
        {rowData.role === ROLE.ADMIN
          ? "Admin"
          : rowData.role === ROLE.COORDINATORS
          ? "Coordenador"
          : rowData.role === ROLE.REAPPLICATORS
          ? "Reaplicador"
          : null}
      </p>
    );
  };

  const ActiveUserBody = (rowData: any) => {
    return (
      <p>
        {rowData.active ? "Ativo" : "Desativado"}
      </p>
    );
  };

  if (props.isLoading) return <Loading />;


  return (
    <Container>
      <h3>Usuários</h3>
      <Padding padding="16px" />
      <Button label="Criar usuário" onClick={() => history("/users/criar")} />
      <Padding padding="16px" />
      <DataTable value={props.users} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="Code"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="role" body={typeUserBody} header="Tipo"></Column>
        <Column field="active" body={ActiveUserBody} header="Ativo"></Column>
      </DataTable>
    </Container>
  );
};

export default ListUsers;
