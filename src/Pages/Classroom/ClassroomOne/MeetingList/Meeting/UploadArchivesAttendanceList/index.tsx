import { MeetingArc } from "../../../../../../Context/Classroom/Meeting/MeetingListRegistration/type";
import { Column, Padding, Row } from "../../../../../../Styles/styles";

const ListArchivesAttendanceList = ({ item }: { item: MeetingArc }) => {
  return (
    <div
      style={{
        padding: "22px 16px",
        background: "#ECF2FF",
        cursor: "pointer",
        borderRadius: "4px",
        marginBottom: "8px",
      }}
      onClick={() => {
        window.open(item.archive_url ??
          process.env.REACT_APP_API_PATH +
            `archive-meeting-bff/${item.id}/` +
            item.original_name
        );
      }}
    >
      <Row>
        <img
          style={{ width: "30px", height: "30px" }}
          alt=""
          src={
            process.env.REACT_APP_API_PATH +
            `archive-meeting-bff/${item.id}/` +
            item.original_name
          }
        />
        <Padding />
        <Column id="center">{item.original_name}</Column>
      </Row>
    </div>
  );
};

export default ListArchivesAttendanceList;
