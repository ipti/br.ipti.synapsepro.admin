import { useContext, useState } from "react";
import MeetingListRegistrationProvider, {
  MeetingListRegistrationContext,
} from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { Column, Container, Padding, Row } from "../../../../../Styles/styles";
import AttendanceList from "./AttendanceListArchives";
import Beneficiarios from "./Beneficiarios";
import UploadArchivesAttendanceList from "./UploadArchivesAttendanceList";
import { MeetingListRegisterTypes } from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import TextAreaComponent from "../../../../../Components/TextArea";
import { Button } from "primereact/button";
import TextInput from "../../../../../Components/TextInput";
import { Form, Formik } from "formik";

const Meeting = () => {
  return (
    <MeetingListRegistrationProvider>
      <MeetingPage />
    </MeetingListRegistrationProvider>
  );
};

const MeetingPage = () => {
  const props = useContext(
    MeetingListRegistrationContext
  ) as MeetingListRegisterTypes;
  const [edit, setEdit] = useState(false);

  return (
    <Container>
      {props.meeting ? (
        <>
          <Formik
            initialValues={{
              name: props.meeting?.name,
              description: props.meeting.description,
            }}
            onSubmit={(values) => {props.UpdateMeeting(values, props.meeting?.id!); setEdit(!edit)}}
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
                          <h2>{props.meeting?.name}</h2>
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
                  <div className="grid">
                    <div className="col-12 md:col-6">
                      <label>Observações</label>
                      <Padding />
                      <TextAreaComponent
                        disabled={!edit}
                        onChange={handleChange}
                        value={values.description}
                        name="description"
                        placeholder="Observações"
                      />
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <Padding padding="16px" />
          {true ? <UploadArchivesAttendanceList /> : <AttendanceList />}
          <Padding padding="16px" />
          <Beneficiarios />
        </>
      ) : null}
    </Container>
  );
};

export default Meeting;
