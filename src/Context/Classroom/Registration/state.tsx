import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RegistrationType, UpdateRegister } from "./type";
import { ControllerUpdateRegistration } from "../../../Services/PreRegistration/controller";
import { useFetchRequestClassroomRegistrationOne } from "../../../Services/PreRegistration/query";
import { formatarData, Status } from "../../../Controller/controllerGlobal";
export const RegistrationClassroomState = () => {
  const { idRegistration } = useParams();
  const { data: registrationRequest, isLoading } =
    useFetchRequestClassroomRegistrationOne(parseInt(idRegistration!));

  const { requestPreRegistrationMutation } = ControllerUpdateRegistration();

  const [registration, setregistration] = useState<
    RegistrationType | undefined
  >();

  useEffect(() => {
    if (registrationRequest) {
      setregistration(registrationRequest);
    }
  }, [registrationRequest]);

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

  const date = new Date(registration?.registration.birthday!);

  const status = [
    { id: Status.APPROVED, name: "Aprovado" },
    { id: Status.REPROVED, name: "Reprovado" },
    { id: Status.PENDING, name: "Pedente" },
  ];

  const getStatus = (id: string) => {
    return status.find((props) => props.id === id);
  };
  const initialValue = {
    name: registration?.registration.name,
    sex: VerifySex(registration?.registration.sex!),
    cpf: registration?.registration.cpf,
    color_race: VerifyColor(registration?.registration.color_race!),
    birthday: !isNaN(date.getTime())
      ? formatarData(registration?.registration.birthday!)
      : registration?.registration.birthday,
    deficiency: registration?.registration.deficiency
      ? { name: "Sim", id: true }
      : { name: "Não", id: false },
    responsable_name: registration?.registration.responsable_name,
    responsable_cpf: registration?.registration.responsable_cpf,
    responsable_telephone: registration?.registration.responsable_telephone,
    status: getStatus(registration?.status!),
  };

  const handleUpdateRegistration = (data: UpdateRegister, id: number) => {
    requestPreRegistrationMutation.mutate({
      data: {
        ...data,
        registration_classroom_id: registration?.id,
        birthday: registration?.registration.birthday,
        responsable_telephone: data?.responsable_telephone?.replace(
          /[^a-zA-Z0-9]/g,
          ""
        ),
        responsable_cpf: data?.responsable_cpf?.replace(/[^a-zA-Z0-9]/g, ""),
      },
      id: id,
    });
  };

  return {
    registration,
    initialValue,
    typesex,
    color,
    handleUpdateRegistration,
    isLoading,
  };
};
