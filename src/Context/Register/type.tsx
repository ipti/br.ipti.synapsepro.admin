import { Dispatch, SetStateAction } from "react";

export interface RegisterTypes {
    padding: string,
    NextStep: () => void
    isOverAge: boolean | undefined
    setIsOverAge: Dispatch<SetStateAction<boolean | undefined>>
    initialState: Registration
    step: number
}

export interface Registration {
    classroom_fk: number | null;
    name: string;
    birthday: string;
    cpf?: string;
    sex: number | null;
    color_race: number | null;
    deficiency: boolean | null;
    deficiency_description?: string;
    responsable_name?: string;
    responsable_cpf?: string;
    responsable_telephone?: string;
    zone: number | null;
  }


  