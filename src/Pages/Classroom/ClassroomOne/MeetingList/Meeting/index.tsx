import { Message } from "primereact/message";
import { useContext } from "react";
import MeetingListRegistrationProvider, {
  MeetingListRegistrationContext,
} from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { Status } from "../../../../../Controller/controllerGlobal";
import { Container, Padding } from "../../../../../Styles/styles";
import AttendanceList from "./AttendanceListArchives";
import Beneficiarios from "./Beneficiarios";
import DataMeeting from "./DataMeeting";
import UploadArchivesAttendanceList from "./UploadArchivesAttendanceList";

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
          <Padding padding="16px"  />
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
