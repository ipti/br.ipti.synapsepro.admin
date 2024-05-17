import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import DropdownComponent from "../../../../Components/Dropdown";
import MaskInput from "../../../../Components/InputMask";
import TextInput from "../../../../Components/TextInput";
import { Column, Padding, Row } from "../../../../Styles/styles";

const ModalFilter = ({
  onHide,
  visible,
}: {
  onHide(): void;
  visible?: boolean | undefined;
}) => {
  

  return (
    <Dialog onHide={onHide} visible={visible} style={{ width: "50vw" }}>
      <div className="grid">
        <div className="col-12 md:col-6">
          <label>Name</label>
          <Padding />
          <TextInput
            //   value={values.name}
            placeholder="name"
            //   onChange={handleChange}
            name="name"
          />
        </div>
        <div className="col-12 md:col-6">
          <label>Sexo</label>
          <Padding />
          <DropdownComponent
            //   value={values.sex}
            optionsLabel="type"
            //   options={props.typesex}
            name="sex"
            //   onChange={handleChange}
          />
        </div>
      </div>{" "}
      <div className="grid">
        <div className="col-12 md:col-6">
          <label>CPF</label>
          <Padding />
          <MaskInput
            //   value={values.cpf}
            mask="999.999.999-99"
            placeholder="CPF"
            //   onChange={handleChange}
            name="cpf"
          />
        </div>
        <div className="col-12 md:col-6">
          <label>Deficiente</label>
          <Padding />
          <DropdownComponent
            //   value={values.deficiency}
            placerholder="Deficiente"
            name="deficiency"
            //   onChange={handleChange}
            options={[
              { id: true, name: "Sim" },
              { id: false, name: "Não" },
            ]}
          />
        </div>
      </div>{" "}
      <Padding padding="16px" />
      <Column style={{ width: "100%" }}>
        <Row id="end">
          <Button label="Limpar filtro" text />
          <Button label="Filtrar" />
        </Row>
      </Column>
    </Dialog>
  );
};

export default ModalFilter;
