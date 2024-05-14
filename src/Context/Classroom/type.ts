import { Dispatch, SetStateAction } from "react";
import { Tsone } from "../Project/ProjectList/type";

export interface ClassroomTypes {
  CreateClassroom: (body: CreateClassroom) => void;
  initialValue: any;
  classrooms: any;
  UpdateClassroom: (
    body: {
      name: string;
    },
    id: number
  ) => void;
  DeleteClassroom: (id: number) => void;
  isLoading: boolean,
  tsOne: Tsone | undefined
  project: number | undefined
  setProject: Dispatch<SetStateAction<number | undefined>>
}

export interface CreateClassroom {
  name: string;
}

export type Events = Event[];

export interface Event {
  id: number;
  start_date: string;
  end_date: string;
  year: number;
}

export interface CreateClassroom {
  name: string;
  project: number;
  year: number;
}
