import { useEffect, useState } from "react";
import { useFetchRequestAllRegistration } from "../../../Services/Beneficiaries/query";
import { ControllerUpdateRegistration } from "../../../Services/PreRegistration/controller";

export const BeneficiariesListState = () => {
  const [registrations, setRegistrations] = useState<any | undefined>();
  const [page, setPage] = useState(0);
  const [limite, setLimite] = useState(10);
  const [filter, setFilter] = useState<
    { value: string; content: string }[] | undefined
  >();
  const { data: registrationsRequests } = useFetchRequestAllRegistration({
    limite: limite,
    page: Math.floor(page / 10 + 1),
  });

  const {
    requestDeleteRegistrationMutation } = ControllerUpdateRegistration();

  useEffect(() => {
    if (registrationsRequests) {
      setRegistrations(registrationsRequests);
    }
  }, [registrationsRequests]);

  const DeleteRegistration = (id: number) => {
    requestDeleteRegistrationMutation.mutate(id);
  };


  return {
    registrations,
    page,
    setPage,
    limite,
    setLimite,
    filter,
    setFilter,
    DeleteRegistration
  };
};
