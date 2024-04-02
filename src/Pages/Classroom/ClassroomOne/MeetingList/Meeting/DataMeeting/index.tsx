import { Form, Formik } from "formik";
import { Column, Padding, Row } from "../../../../../../Styles/styles";
import TextInput from "../../../../../../Components/TextInput";
import { Button } from "primereact/button";
import TextAreaComponent from "../../../../../../Components/TextArea";
import DropdownComponent from "../../../../../../Components/Dropdown";
import { ROLE, Status } from "../../../../../../Controller/controllerGlobal";
import { useContext, useState } from "react";
import { MeetingListRegistrationContext } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { AplicationContext } from "../../../../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../../../../Types/types";

const DataMeeting = () => {
  const [edit, setEdit] = useState(false);

  const props = useContext(
    MeetingListRegistrationContext
  ) as MeetingListRegisterTypes;

  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;

  const status = [
    { id: Status.APPROVED, name: "Aprovado" },
    { id: Status.REPROVED, name: "Reprovado" },
    { id: Status.PENDING, name: "Pedente" },
  ];
  const getStatus = (id: string) => {
    return status.find((props) => props.id === id);
  };

  return (
    <Formik
      initialValues={{
        name: props.meeting?.name,
        description: props.meeting?.description,
        justification: props.meeting?.justification,
        status: getStatus(props.meeting?.status!),
      }}
      onSubmit={(values) => {
        props.UpdateMeeting(values, props.meeting?.id!);
        setEdit(!edit);
      }}
    >
      {({ values, errors, handleChange }) => {
        return (
          <Form>
            <Row id="space-between">
              <Row>
                <Column id="center">
                  {edit ? (
                    <TextInput
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  ) : (
                    <Row>
                      <h2>{props.meeting?.name}</h2>
                    </Row>
                  )}
                </Column>
                <Padding />
                {!edit ? (
                  <Button
                    text
                    icon="pi pi-pencil"
                    onClick={() => setEdit(true)}
                  />
                ) : null}
              </Row>
              {edit ? (
                <Row>
                  <Button label="Salvar" icon="pi pi-save" />
                  <Padding />
                  <Button
                    label="Cancelar"
                    severity="secondary"
                    type="button"
                    onClick={() => setEdit(false)}
                  />
                </Row>
              ) : null}
            </Row>
            <Padding padding="16px" />
            {(propsAplication.user?.role === ROLE.ADMIN ||
              propsAplication.user?.role === ROLE.COORDINATORS) && (
              <>
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Status</label>
                    <Padding />
                    <DropdownComponent
                      disabled={!edit}
                      value={values.status}
                      onChange={handleChange}
                      name="status"
                      placerholder="Status"
                      optionsLabel="name"
                      options={status}
                    />
                  </div>
                </div>
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Justificativa</label>
                    <Padding />
                    <TextAreaComponent
                      disabled={!edit}
                      onChange={handleChange}
                      value={values.justification}
                      name="justification"
                      placeholder="Justicativa sobre a escolha do status"
                    />
                  </div>
                </div>
              </>
            )}{" "}
            <div className="grid">
              <div className="col-12 md:col-6">
                <label>Observações</label>
                <Padding />
                <TextAreaComponent
                  disabled={!edit}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  placeholder="Observações sobre o encontro"
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DataMeeting;
