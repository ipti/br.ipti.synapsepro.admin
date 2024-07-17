import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { ConfirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentPage from "../../Components/ContentPage";

import Loading from "../../Components/Loading";
import UsersProvider, { UsersContext } from "../../Context/Users/context";
import { UsersTypes } from "../../Context/Users/type";
import { Padding } from "../../Styles/styles";
import { AplicationContext } from "../../Context/Aplication/context";
import { PropsAplicationContext } from "../../Types/types";

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

  const propsAplication = useContext(AplicationContext) as PropsAplicationContext;


  const [visible, setVisible] = useState<any>(false);
  // const actionBodyTemplate = (rowData: any) => {
  //     return (
  //         <Row id='end'>
  //             {/* <Button icon="pi pi-pencil" rounded className="mr-2" onClick={() => { history("/users/" + rowData.id) }} /> */}
  //             <Button icon="pi pi-trash" rounded type="button" severity="danger" onClick={() => { props.DeleteUser(rowData.id) }} />
  //         </Row>
  //     );
  // };


  // const ActionsUserBody = (rowData: any) => {
  //   return (
  //     <Button severity="danger" rounded icon={"pi pi-trash"} onClick={() => { setVisible(rowData) }} />
  //   );
  // };

  if (props.isLoading && !props.error) return <Loading />;

  const renderHeader = () => {
    return (
      <div
        className="flex justify-content-between"
      // style={{ background: color.colorCard }}
      >
        <Button label="Criar professor" onClick={() => history("/users/criar")} />

        {/* <div>
          <DropdownComponent optionsLabel="name" value={props.role} onChange={(e) => props.setRole(e.target.value)} optionsValue="id" placerholder="Filtrar tipo de usuário" options={1 === ROLE.ADMIN
            ? [
              { id: "TODOS", name: "Todos" },
              { id: ROLE.ADMIN, name: "Admin" },
              { id: ROLE.Conteudista, name: "Conteudista" },
              { id: ROLE.Coordenador, name: "Coordenador" },
              { id: ROLE.Teacher, name: "Professor" },
              { id: ROLE.Student, name: "Aluno" },
            ]
            : [
              { id: "TODOS", name: "Todos" },
              { id: ROLE.ADMIN, name: "Admin" },
              { id: ROLE.Conteudista, name: "Conteudista" },
              { id: ROLE.Coordenador, name: "Coordenador" },
              { id: ROLE.Teacher, name: "Professor" },
              { id: ROLE.Student, name: "Aluno" },
            ]
          } />
        </div> */}

      </div>
    );
  };


  return (
    <>
      <ContentPage title="Professores" description="Lista Professores cadastrados.">
        <Padding padding="16px" />
        <DataTable value={props.users} header={!propsAplication.user?.teacher?.id ? renderHeader : null} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header=""></Column>
          <Column field="name" header="Nome"></Column>
        </DataTable>
      </ContentPage>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteUser(visible?.id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default ListUsers;
