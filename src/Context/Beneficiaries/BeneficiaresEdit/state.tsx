import { useParams } from "react-router-dom";
import { useFetchRequestRegistrationOne, useFetchRequestRegistrationOneCPF } from "../../../Services/PreRegistration/query";
import { useEffect, useState } from "react";

export const BeneficiariesEditState = () => {

  const {id} = useParams()
  
  const { data: registrationsRequests } = useFetchRequestRegistrationOne(id!);
  const [registrations, setRegistrations] = useState<any | undefined>();


  useEffect(() => {
    if (registrationsRequests) {
      setRegistrations(registrationsRequests);
    }
  }, [registrationsRequests]);
  const initialValue = {
    name: "",
    sex: "",
    cpf: "",
    color_race: "",
    birthday: "",
    deficiency: "",
    responsable_name: "",
    responsable_cpf: "",
    responsable_telephone: "",
    status: "",
  };
  return {
    registrations, initialValue
  };
};
