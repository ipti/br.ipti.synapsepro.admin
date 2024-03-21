import { RegistrationsList } from "../../RegistrationsList/type";

export interface MeetingListRegisterTypes {
  meeting: Meeting | undefined;
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
}

export interface Classroom {
  name: string;
  registrations: Registration[];
}

export interface Registration {
  id: number;
  name: string;
}
