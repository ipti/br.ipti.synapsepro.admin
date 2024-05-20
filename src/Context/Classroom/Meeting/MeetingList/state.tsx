import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestMeetingList } from "../../../../Services/Meeting/query";
import { Meeting } from "./type";
import { MeetingController } from "../../../../Services/Meeting/controller";
export const MeetingListState = () => {
  const { id } = useParams();

  const { data: meetingRequest, isLoading } = useFetchRequestMeetingList(id!);

  const { requestDeleteMeetingMutation } = MeetingController()


  const [meetings, setMeeting] = useState<Array<Meeting> | undefined>();

  const DeleteMeeting = (id: number) => {
    requestDeleteMeetingMutation.mutate(id)
}

  useEffect(() => {
    if (meetingRequest) {
      setMeeting(meetingRequest);
    }
  }, [meetingRequest]);

  return { meetings, isLoading , DeleteMeeting};
};
