import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { ConfirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentPage from "../../../Components/ContentPage";
import BeneficiariesListProvider, {
  BeneficiariesListContext,
} from "../../../Context/Beneficiaries/BeneficiariesList/context";
import { BeneficiariesListType } from "../../../Context/Beneficiaries/BeneficiariesList/type";
import color from "../../../Styles/colors";
import { Padding } from "../../../Styles/styles";

const BeneficiariesList = () => {
  return (
    <BeneficiariesListProvider>
      <BeneficiariesListPage />
    </BeneficiariesListProvider>
  );
};

const BeneficiariesListPage = () => {
  const props = useContext(BeneficiariesListContext) as BeneficiariesListType;
  const history = useNavigate();

  const [visible, setVisible] = useState<any>();

  const renderHeader = () => {
    return (
      <div
        className="flex justify-content-between"
        style={{ background: color.colorCard }}
      >
        <Button
          label={window.innerWidth > 800 ? "Adicionar alunos" : undefined}
          icon="pi pi-plus"
          onClick={() => history("criar")}
        />
        {/* <Button
          label={window.innerWidth > 800 ? "Configurar filtro" : undefined}
          icon="pi pi-filter"
          onClick={() => {
            setVisibleFilter(true);
          }}
        /> */}
      </div>
    );
  };

  // const ActionBeneficiariesBody = (rowData: any) => {
  //   return (
  //     <Row id="center" style={{ gap: "8px" }}>
  //       <Button
  //         rounded
  //         icon={"pi pi-pencil"}
  //         onClick={() => {
  //           history(`${rowData.id}`);
  //         }}
  //       />
  //       <Button
  //         severity="danger"
  //         rounded
  //         icon={"pi pi-trash"}
  //         onClick={() => {
  //           setVisible(rowData);
  //         }}
  //       />
  //     </Row>
  //   );
  // };

  return (
    <>
      <ContentPage title="Alunos" description="Visualização dos alunos da escolas.">
        <Padding padding="16px" />
        <Padding padding="8px" />
        <DataTable
          value={props.registrations}
          tableStyle={{ minWidth: "50rem" }}
          header={renderHeader}
          showGridlines
          paginator
          rows={10}
        >
          <Column field="student_name" header="Nome"></Column>
          <Column
            field="school_name"
            header="Escola"
          ></Column>
          <Column field="classroom_name" header="Turma"></Column>
          {/* <Column header="Ações" body={ActionBeneficiariesBody}></Column> */}
        </DataTable>
      </ContentPage>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmação"
        icon="pi pi-exclamation-triangle"
        accept={() => props.DeleteRegistration(visible.id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default BeneficiariesList;
