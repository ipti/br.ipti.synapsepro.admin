import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersProvider, { UsersContext } from "../../Context/Users/context";
import { User, UsersTypes } from "../../Context/Users/type";
import { Container, Padding } from "../../Styles/styles";
import { ROLE } from "../../Controller/controllerGlobal";
import Loading from "../../Components/Loading";
import { ConfirmDialog } from "primereact/confirmdialog";

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

  const [visible, setVisible] = useState<any>(false)
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

  const ActionsUserBody = (rowData: any) => {
    return (
      <Button severity="danger" icon={"pi pi-trash"} onClick={() => {setVisible(rowData)}} />
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
        <Column field="name" header="Nome"></Column>
        <Column field="username" header="Usuário"></Column>
        <Column field="role" body={typeUserBody} header="Tipo"></Column>
        <Column field="active" body={ActiveUserBody} header="Ativo"></Column>
        {/* <Column field="actions" body={ActionsUserBody} header="Ações"></Column> */}

      </DataTable>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteUser(visible?.id)}
        reject={() => setVisible(false)}
      />
    </Container>
  );
};

export default ListUsers;
