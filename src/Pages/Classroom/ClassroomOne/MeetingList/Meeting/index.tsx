import { useContext } from "react";
import MeetingListRegistrationProvider, {
  MeetingListRegistrationContext,
} from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { Container, Padding, Row } from "../../../../../Styles/styles";
import AttendanceList from "./AttendanceListArchives";
import Beneficiarios from "./Beneficiarios";
import UploadArchivesAttendanceList from "./UploadArchivesAttendanceList";
import { MeetingListRegisterTypes } from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import TextAreaComponent from "../../../../../Components/TextArea";
import { Button } from "primereact/button";

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

  return (
    <Container>
      {props.meeting ? (
        <>
          <Row id="space-between">
            <h2>{props.meeting?.name}</h2>
            <Button label="Salvar" icon="pi pi-save" />
          </Row>
          <Padding padding="16px" />
          {true ? <UploadArchivesAttendanceList /> : <AttendanceList />}
          <Padding padding="16px" />
          <div className="grid">
            <div className="col-12 md:col-6">
              <label>Observações</label>
              <Padding />
              <TextAreaComponent placeholder="Observações" />
            </div>
          </div>
          <Padding padding="16px" />
          <Beneficiarios />
        </>
      ) : null}
    </Container>
  );
};

export default Meeting;
