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
import { Padding, Row } from "../../../Styles/styles";
import { formatarData } from "../../../Controller/controllerGlobal";
import http from "../../../Services/axios";

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

  const downloadCSV = async (row: any) => {

    try {
      const response = await http.get('/performance/report-one-line-student/' + row.id)

      // Criar um link para download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'synapse-' + row.name + '.csv'); // Nome do arquivo
      document.body.appendChild(link);
      link.click();

      // Remover o link
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }
  };

  const ActionBeneficiariesBody = (rowData: any) => {
    return (
      <Row id="center" style={{ gap: "8px" }}>
        <Button
          rounded
          icon={"pi pi-download"}
          onClick={() => {
            downloadCSV(rowData);
          }}
        />
      </Row>
    );
  };

  const BodyCreated = (value: any) => {
    return (
      <p>
        {formatarData(value.created_at)}
      </p>
    )

  }

  return (
    <>
      <ContentPage title="Alunos" description="Visualização dos alunos da escolas.">
        <Padding padding="16px" />
        <Padding padding="8px" />
        <DataTable
          value={props.registrations}
          tableStyle={{ minWidth: "50rem" }}
          header={renderHeader}
          paginator
          rows={10}
        >
          <Column field="id" header=""></Column>
          <Column
            field="name"
            header="Nome"
          ></Column>
          <Column body={BodyCreated} header="Data de criação"></Column>
          <Column header="Ações" body={ActionBeneficiariesBody}></Column>
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
