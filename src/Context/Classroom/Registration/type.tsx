export interface RegistrationDetailsTypes {
  registration?: RegistrationType;
  typesex: {
    id: number;
    type: string;
  }[];
  color: {
    id: number;
    name: string;
  }[];
  initialValue: UpdateRegister
  handleUpdateRegistration: (data: UpdateRegister, id: number) => void
}


export interface UpdateRegister 
  {
    name: string | undefined;
    sex: {
        id: number;
        type: string;
    } | undefined;
    cpf: string | undefined;
    color_race: {
        id: number;
        name: string;
    } | undefined;
    birthday: string | undefined | Date;
    deficiency: {
      name: string;
      id: boolean;
    };
    responsable_name: string | undefined;
    responsable_cpf: string | undefined;
    responsable_telephone: string | undefined;
    status: {id: string, name: string} | undefined;
}

export interface RegistrationType {
  id: number;
  classroom_fk?: number;
  name?: string;
  birthday?: string;
  cpf?: string;
  sex?: number;
  color_race?: number;
  deficiency?: boolean;
  deficiency_description?: string | null;
  responsable_name?: string;
  responsable_cpf?: string;
  responsable_telephone?: string;
  zone?: number;
  status?: string;
}
