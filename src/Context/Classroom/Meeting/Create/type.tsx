export interface CreateMeeting {
    name: string;
    meeting_date?: Date,
    users?: {id: number},
    classroom?: number
  }

  export interface CreateMeetingType {
    CreateMeeting: (data: CreateMeeting) => void
  }