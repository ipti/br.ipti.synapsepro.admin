import { Message } from "primereact/message";
import { useContext } from "react";
import Upload from "../../../../../Components/Upload";
import { AplicationContext } from "../../../../../Context/Aplication/context";
import MeetingListRegistrationProvider, {
  MeetingListRegistrationContext,
} from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/context";
import { MeetingListRegisterTypes } from "../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { ROLE, Status } from "../../../../../Controller/controllerGlobal";
import { Column, Container, Padding } from "../../../../../Styles/styles";
import { PropsAplicationContext } from "../../../../../Types/types";
import Beneficiarios from "./Beneficiarios";
import DataMeeting from "./DataMeeting";
import ListArchivesAttendanceList from "./UploadArchivesAttendanceList";
import Loading from "../../../../../Components/Loading";
import TextAreaComponent from "../../../../../Components/TextArea";

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
          <div className="grid">
            <Column id="center" className="col-12 md:col-6">
              <div>
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
                      ? "Pendente de Revisão"
                      : "info"
                  }
                />
              </div>
            </Column>

            {props.meeting.justification &&
              propsAplication.user?.role === ROLE.REAPPLICATORS && (
                <div className="col-12 md:col-6">
                  <label>Justificativa</label>
                  <Padding />
                  <TextAreaComponent
                    disabled={true}
                    value={props.meeting?.justification}
                    name="justification"
                    placeholder="Justicativa sobre a escolha do status"
                  />
                </div>
              )}
          </div>
          <Padding padding="8px" />
          <DataMeeting />
          <Padding padding="16px" />
          {!(props.meeting.status === Status.APPROVED && propsAplication.user?.role === ROLE.REAPPLICATORS) && <div className="grid">
            <div className="col-12 md:col-6">
              <label>Salve os arquivos do encontro</label>
              <Padding />
              <Upload />
            </div>
          </div>}
          <Padding />
          {props.meeting?.meeting_archives?.length > 0 && (
            <label>Arquivos</label>
          )}
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
