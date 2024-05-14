import { DataTable } from "primereact/datatable";
import BeneficiariesListProvider, {
  BeneficiariesListContext,
} from "../../../Context/Beneficiaries/BeneficiariesList/context";
import { Container, Padding } from "../../../Styles/styles";
import { Column } from "primereact/column";
import { useContext } from "react";
import { BeneficiariesListType } from "../../../Context/Beneficiaries/BeneficiariesList/type";
import { Paginator } from "primereact/paginator";

const BeneficiariesList = () => {
  return (
    <BeneficiariesListProvider>
      <BeneficiariesListPage />
    </BeneficiariesListProvider>
  );
};

const BeneficiariesListPage = () => {
  const props = useContext(BeneficiariesListContext) as BeneficiariesListType;
  return (
    <Container>
      <h3>Usuários</h3>
      <Padding padding="16px" />
      <Padding padding="16px" />
      <DataTable
        value={props.registrations?.content}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="name" header="Nome"></Column>
        <Column field="responsable_name" header="Nome do responsável"></Column>
        <Column field="cpf" header="CPF"></Column>
      </DataTable>
      <Paginator first={1}  totalRecords={props.registrations?.total} rows={10} />
    </Container>
  );
};

export default BeneficiariesList;
