import { Message } from "primereact/message";
import { useContext } from "react";
import MeetingListRegistrationProvider, {
  MeetingListRegistrationContext,
} from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { ROLE, Status } from "../../../../../Controller/controllerGlobal";
import { Container, Padding } from "../../../../../Styles/styles";
import AttendanceList from "./AttendanceListArchives";
import Beneficiarios from "./Beneficiarios";
import DataMeeting from "./DataMeeting";
import UploadArchivesAttendanceList from "./UploadArchivesAttendanceList";
import { AplicationContext } from "../../../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../../../Types/types";

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

  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;

  return (
    <Container>
      {props.meeting ? (
        <>
          <Message
            severity={
              props.meeting?.status === Status.PENDING
                ? "warn"
                : props.meeting?.status === Status.APPROVED
                ? "success"
                : props.meeting?.status === Status.REPROVED
                ? "error"
                : "info"
            }
            text={
              props.meeting?.status === Status.PENDING
                ? "Pendente"
                : props.meeting?.status === Status.APPROVED
                ? "Aprovado"
                : props.meeting?.status === Status.REPROVED
                ? "Reprovado"
                : "info"
            }
          />
          <Padding />
          {props.meeting.justification &&
            propsAplication.user?.role === ROLE.REAPPLICATORS && (
              <h4>Justificativa: {props.meeting.justification}</h4>
            )}
          <Padding padding="16px" />
          <DataMeeting />
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
