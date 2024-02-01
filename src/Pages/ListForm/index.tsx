import { useContext } from "react";
import CardForm from "../../Components/CardForm";
import ListFormProvider, {
  ListFormContext,
} from "../../Context/ListForm/context";
import { Container, Padding, Row } from "../../Styles/styles";
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
        <Button label="Criar formulário" icon={"pi pi-plus"} onClick={() => history("/")} />
      </Row>
      <Padding padding="8px" />
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
