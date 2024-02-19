import { useEffect, useState } from "react";
import json from "../../../Data/students.json";
import { RegistrationType } from "./type";
export const RegistrationClassroomState = () => {
  const [registration, setregistration] = useState<
    any | undefined
  >();

  useEffect(() => {
    setregistration(json[0]);
  }, []);
  var typesex = [
    { id: 2, type: "Feminino" },
    { id: 1, type: "Masculino" },
  ];

  const color = [
    { id: 0, name: "Não Declarada" },
    { id: 1, name: "Branca" },
    { id: 2, name: "Preta" },
    { id: 3, name: "Parda" },
    { id: 4, name: "Amarela" },
    { id: 5, name: "Indígena" },
  ];

  const VerifySex = (sex: number) => {
    return typesex.find((props) => props.id === sex);
  };

  const VerifyColor = (color_race: number) => {
    return color.find((props) => props.id === color_race);
  };
  const initialValue = {
    name: registration?.name,
    sex: VerifySex(registration?.sex!),
    cpf: registration?.cpf,
    color_race: VerifyColor(registration?.color_race!),
    birthday: registration?.birthday,
    deficiency: registration?.deficiency ? { name: "Sim", id: true } : { name: "Não", id: false },
    responsable_name: registration?.responsable_name,
    responsable_cpf: registration?.responsable_cpf,
    responsable_telephone: registration?.responsable_telephone
  };

  return { registration, initialValue, typesex, color };
};
