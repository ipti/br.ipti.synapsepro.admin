import { Dispatch, SetStateAction } from "react";

export interface BeneficiariesListType {
  registrations: any;
  setLimite: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  limite: number;
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
