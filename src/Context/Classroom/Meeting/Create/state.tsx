import { MeetingController } from "../../../../Services/Meeting/controller"
import { CreateMeeting } from "./type"

export const CreateMeetingState = () => {

    const { requestCreateMeetingMutation } = MeetingController()

    const CreateMeeting = (data: CreateMeeting) => {
        requestCreateMeetingMutation.mutate(data)
    }

    return {
        CreateMeeting
    }
}