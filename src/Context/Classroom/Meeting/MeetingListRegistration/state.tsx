import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestMeetingOne } from "../../../../Services/Meeting/query";
import { Meeting } from "./type";
export const MeetingListRegistrationState = () => {
  const { idMeeting } = useParams();

  const { data: meetingRequest } = useFetchRequestMeetingOne(idMeeting!);
  const [meeting, setmeeting] = useState<Meeting | undefined>();

  useEffect(() => {
    if (meetingRequest) {
      setmeeting(meetingRequest);
    }
  }, [meetingRequest]);

  return { meeting };
};
