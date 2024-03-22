export interface CreateMeeting {
    name: string;
    meeting_date?: Date,
    users?: {id: number},
    classroom?: number
  }

  export interface EditMeeting {
    name?: string;
    description?: string
    status?: {id: string, name: string}
  }

  export interface CreateFouls {
    meeting: number;
    registration?: Array<number>
  }

  export interface CreateMeetingType {
    CreateMeeting: (data: CreateMeeting) => void
  }