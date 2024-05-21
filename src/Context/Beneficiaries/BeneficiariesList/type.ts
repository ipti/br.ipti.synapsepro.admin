import { Dispatch, SetStateAction } from "react";

export interface BeneficiariesListType {
  registrations: any;
  setLimite: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
  DeleteRegistration: (id: number) => void
  page: number;
  limite: number;
  nameFilter: string | undefined
  cpfFilter: string | undefined
  handleFilter: (values: {
    name: string;
    cpf: string;
}) => void
  filter:
    | {
        value: string;
        content: string;
      }[]
    | undefined;
  setFilter: Dispatch<
    SetStateAction<
      | {
          value: string;
          content: string;
        }[]
      | undefined
    >
  >;
}
