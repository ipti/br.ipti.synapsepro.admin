import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestMeetingList } from "../../../../Services/Meeting/query";
import { Meeting } from "./type";
export const MeetingListState = () => {
  const { id } = useParams();

  const { data: meetingRequest } = useFetchRequestMeetingList(id!);

  const [meetings, setMeeting] = useState<Array<Meeting> | undefined>();

  useEffect(() => {
    if (meetingRequest) {
      setMeeting(meetingRequest);
    }
  }, [meetingRequest]);

  return { meetings };
};
