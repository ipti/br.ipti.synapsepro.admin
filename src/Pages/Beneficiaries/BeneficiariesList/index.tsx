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
import { Container, Padding } from "../../../Styles/styles";
import ModalFilter from "./ModalFilter";
import color from "../../../Styles/colors";

const BeneficiariesList = () => {
  return (
    <BeneficiariesListProvider>
      <BeneficiariesListPage />
    </BeneficiariesListProvider>
  );
};

const BeneficiariesListPage = () => {
  const props = useContext(BeneficiariesListContext) as BeneficiariesListType;

  const [visible, setVisible] = useState<any>();

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end" style={{background: color.colorCard}}>
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
  return (
    <>
      <Container>
        <h3>Beneficiarios</h3>
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
