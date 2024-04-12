import { CreateFouls, EditMeeting } from "../Create/type";

export interface MeetingListRegisterTypes {
  meeting: Meeting | undefined;
  UpdateMeeting: (data: EditMeeting, id: number) => void
  CreateFouls: (data: CreateFouls) => void
  ArchivesMeeting: (data: any, id: number) => void
  isLoading: boolean
}

export interface Meeting {
  id: number
  name: string
  meeting_date: string
  status: string
  description: any
  theme: string
  justification: any
  classroom_fk: number
  fouls: any[]
  classroom: Classroom
  meetingUser: MeetingUser[]
  meetingArchives: MeetingArc[]
}

export interface Classroom {
  name: string
  registrations: Registration[]
}

export interface Registration {
  id: number
  name: string
}

export interface MeetingUser {
  users: Users
}

export interface Users {
  id: number
  name: string
  username: string
  password: string
  active: boolean
  role: string
}

export interface MeetingArc {
  archive_url: string,
  id: number
  meeting_fk: number
  size: number
  original_name: string
  createdAt: string
  updatedAt: string
}
