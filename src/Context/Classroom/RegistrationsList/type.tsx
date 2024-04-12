import { Status } from "../../../Controller/controllerGlobal";

export interface RegistrationClassroomTypes {
  registrations?: RegistrationsList;
  DeleteRegistration: (id: number) => void
  isLoading: boolean
}

export type RegistrationsList = RegistrationType[];

export interface RegistrationType {
  id: number;
  classroom_fk: number;
  name: string;
  birthday: string;
  cpf: string;
  sex: number;
  color_race: number;
  deficiency: boolean;
  deficiency_description: string | null;
  responsable_name: string;
  responsable_cpf: string;
  responsable_telephone: string;
  zone: number;
  status: string;
}
