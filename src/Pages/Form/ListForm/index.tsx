import { useContext } from "react";
import CardForm from "../../../Components/Card/CardForm";
import ListFormProvider, {
  ListFormContext,
} from "../../../Context/Form/ListForm/context";
import { Container, Padding, Row } from "../../../Styles/styles";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const ListForm = () => {
  return (
    <ListFormProvider>
      <ListFormPage />
    </ListFormProvider>
  );
};

const ListFormPage = () => {
  const props = useContext(ListFormContext);

  const history = useNavigate()

  return (
    <Container>
      <Row id="end">
        <Button label="Criar formulário" icon={"pi pi-plus"} onClick={() => history("/create")} />
      </Row>
      <Padding padding="16px" />
      <div className="grid ">
        {props?.forms?.form.map((item, index) => {
          return (
            <div className="col-12 md:col-6 lg:col-4">
              <CardForm item={item} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ListForm;
