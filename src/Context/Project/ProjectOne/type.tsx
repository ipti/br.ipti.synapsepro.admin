import { UpdateProject } from "../CreateList/type";

export interface ProjectOneTypes {
  project: Project | undefined;
  isLoading: boolean;
  updateProject: (data: UpdateProject, id: number) => void;
}

export interface Project {
  id: number;
  name: string;
  active: boolean;
  approval_percentage: number;
  avartar_url: any;
  social_technology_id: number;
  createdAt: string;
  updatedAt: string;
  classrooms: Classroom[];
}

export interface Classroom {
  id: number;
  project_fk: number;
  name: string;
  year: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
