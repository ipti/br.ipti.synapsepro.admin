import { useEffect, useState } from "react";
import { useFetchRequestAllRegistration } from "../../../Services/Beneficiaries/query";
import { ControllerUpdateRegistration } from "../../../Services/PreRegistration/controller";

export const BeneficiariesListState = () => {
  const [registrations, setRegistrations] = useState<any | undefined>();
  const { data: registrationsRequests } = useFetchRequestAllRegistration();

 
  const { requestDeleteRegistrationMutation } = ControllerUpdateRegistration();

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
    DeleteRegistration,
  };
};
