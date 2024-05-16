import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { useContext, useState } from "react";
import BeneficiariesListProvider, {
  BeneficiariesListContext,
} from "../../../Context/Beneficiaries/BeneficiariesList/context";
import { BeneficiariesListType } from "../../../Context/Beneficiaries/BeneficiariesList/type";
import { somarNumeros } from "../../../Controller/controllerGlobal";
import { Container, Padding, Row } from "../../../Styles/styles";
import ModalFilter from "./ModalFilter";
import color from "../../../Styles/colors";
import { useNavigate } from "react-router-dom";

const BeneficiariesList = () => {
  return (
    <BeneficiariesListProvider>
      <BeneficiariesListPage />
    </BeneficiariesListProvider>
  );
};

const BeneficiariesListPage = () => {
  const props = useContext(BeneficiariesListContext) as BeneficiariesListType;
  const history = useNavigate()

  const [visible, setVisible] = useState<any>();

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between" style={{ background: color.colorCard }}>
        <Button label="Adicionar beneficiario" icon="pi pi-plus" onClick={() => history("criar")} />
        <Button
          label="Configurar filtro"
          icon="pi pi-filter"
          onClick={() => {
            setVisible(true);
          }}
        />
      </div>
    );
  };

  const ActionBeneficiariesBody = (rowData: any) => {
    return (
      <Row style={{ gap: "8px" }}>
        <Button rounded icon={"pi pi-pencil"} onClick={() => { history(`${rowData.id}`) }} />
        <Button severity="danger" rounded icon={"pi pi-trash"} onClick={() => { setVisible(rowData) }} />
      </Row>
    );
  };
  return (
    <>
      <Container>
        <h1>Beneficiarios</h1>
        <Padding padding="16px" />
        <DataTable
          value={props.registrations?.content}
          tableStyle={{ minWidth: "50rem" }}
          header={renderHeader}
          showGridlines
        >
          <Column field="name" header="Nome"></Column>
          <Column
            field="responsable_name"
            header="Nome do responsável"
          ></Column>
          <Column field="cpf" header="CPF"></Column>
          <Column header="Ações" body={ActionBeneficiariesBody}></Column>
        </DataTable>
        <Paginator
          first={props.page}
          totalRecords={props.registrations?.total}
          onPageChange={(e) => {
            props.setPage(somarNumeros(e.first, 1));
            console.log(e);
          }}
          rows={props.limite}
        />
      </Container>
      <ModalFilter visible={visible} onHide={() => setVisible(false)} />
    </>
  );
};

export default BeneficiariesList;
