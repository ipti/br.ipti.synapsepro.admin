import { CreateFouls, EditMeeting } from "../Create/type";

export interface MeetingListRegisterTypes {
  meeting: Meeting | undefined;
  UpdateMeeting: (data: EditMeeting, id: number) => void
  CreateFouls: (data: CreateFouls) => void
}

export interface Meeting {
  id: number;
  name: string;
  meeting_date: string;
  status: string;
  user_fk: number;
  classroom_fk: number;
  fouls: any[];
  classroom: Classroom;
  description: string
}

export interface Classroom {
  name: string;
  registrations: Registration[];
}

export interface Registration {
  id: number;
  name: string;
}
