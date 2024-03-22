import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestMeetingOne } from "../../../../Services/Meeting/query";
import { Meeting } from "./type";
import { CreateFouls, EditMeeting } from "../Create/type";
import { MeetingController } from "../../../../Services/Meeting/controller";
export const MeetingListRegistrationState = () => {



  const { idMeeting } = useParams();

  const { data: meetingRequest } = useFetchRequestMeetingOne(idMeeting!);
  const [meeting, setmeeting] = useState<Meeting | undefined>();


  const { requestUpdateMeetingMutation, requestCreateFoulsMutation } = MeetingController()

  const UpdateMeeting = (data: EditMeeting, id: number) => {
    requestUpdateMeetingMutation.mutate({data: data, id: id})
  }

  const CreateFouls = (data: CreateFouls) => {
    requestCreateFoulsMutation.mutate(data)
  }

  useEffect(() => {
    if (meetingRequest) {
      setmeeting(meetingRequest);
    }
  }, [meetingRequest]);

  return { meeting, UpdateMeeting, CreateFouls };
};
