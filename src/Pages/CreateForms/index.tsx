import { Button } from "primereact/button";
import { useContext, useState } from "react";

import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";
import CreateOrEditFormProvider, { CreateOrEditFormContext } from "../../Context/CreateOrEditForm/context";
import { Container, Padding, Row } from "../../Styles/styles";
import { CreateOrEditFormTypes } from "../../Types/types";
import Form from "./Form";
import Config from "./Config";

const CreateOrEditForm = () => {
  return (
    <CreateOrEditFormProvider>
      <CreateOrEditForms />
    </CreateOrEditFormProvider>
  )
}

const CreateOrEditForms = () => {

  const [tabMenu, setTabMenu] = useState(0)

  const { form } = useContext(
    CreateOrEditFormContext
  ) as CreateOrEditFormTypes;
  const history = useNavigate();

  const items = [
    {
      label: 'Perguntas', icon: 'pi pi-question-circle', command: () => {
        setTabMenu(0)
      }
    },
    {
      label: 'Respostas', icon: 'pi pi-comment', command: () => {
        setTabMenu(1)
      }
    },
    {
      label: 'Configurações', icon: 'pi pi-cog', command: () => {
        setTabMenu(2)
      }
    },
  ];

  return (
    <Container>
      {form ? (
        <Row id="end" style={{ gap: "4px" }}>
          <Button label="Preview" icon="pi pi-eye" onClick={() => history(`/view/${form.id}`)} />{" "}
          <Button label="Salvar" icon="pi pi-save" onClick={() => history("/view")} />{" "}
        </Row>
      ) : null}
      <Padding padding="8px" />
      <div className="card">
        <TabMenu model={items} />
      </div>
      {
        tabMenu === 0 ? <Form /> : tabMenu === 2 ? <Config /> : null
      }
    </Container>
  );
};

export default CreateOrEditForm;
