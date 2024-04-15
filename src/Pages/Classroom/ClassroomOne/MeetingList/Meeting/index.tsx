import { Message } from "primereact/message";
import { useContext } from "react";
import Upload from "../../../../../Components/Upload";
import { AplicationContext } from "../../../../../Context/Aplication/context";
import MeetingListRegistrationProvider, {
  MeetingListRegistrationContext,
} from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { ROLE, Status } from "../../../../../Controller/controllerGlobal";
import { Container, Padding } from "../../../../../Styles/styles";
import { PropsAplicationContext } from "../../../../../Types/types";
import Beneficiarios from "./Beneficiarios";
import DataMeeting from "./DataMeeting";
import ListArchivesAttendanceList from "./UploadArchivesAttendanceList";
import Loading from "../../../../../Components/Loading";

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

  if (props.isLoading) return <Loading />;


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
          <div className="grid">
            <div className="col-12 md:col-6">
              <label>Salve os arquivos do encontro</label>
              <Padding />
              <Upload />
            </div>
          </div>
          <Padding />
          {props.meeting?.meeting_archives?.length > 0 && <label>Arquivos</label>}
          <Padding />

          <div className="grid">
            <div className="col-12 md:col-6">
              {props.meeting?.meeting_archives?.map((item) => {
                return <ListArchivesAttendanceList item={item} />;
              })}
            </div>
          </div>
          {/* {true ? <UploadArchivesAttendanceList /> : <AttendanceList />} */}
          <Padding padding="16px" />
          <Beneficiarios />
        </>
      ) : null}
    </Container>
  );
};

export default Meeting;
