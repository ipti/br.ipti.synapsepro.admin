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
  initialValue: {
    name: any;
    sex:
      | {
          id: number;
          type: string;
        }
      | undefined;
    cpf: any;
    color_race:
      | {
          id: number;
          name: string;
        }
      | undefined;
    birthday: any;
    deficiency: {
      name: string;
      id: boolean;
    };
    responsable_name: string | undefined;
    responsable_cpf: string | undefined;
    responsable_telephone: string | undefined;
  };
}

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
