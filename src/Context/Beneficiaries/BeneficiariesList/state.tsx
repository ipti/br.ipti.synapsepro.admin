import { useEffect, useState } from "react";
import { useFetchRequestAllRegistration } from "../../../Services/Beneficiaries/query";

export const BeneficiariesListState = () => {

    const [registrations, setRegistrations] = useState<any | undefined>();
    const { data: registrationsRequests } = useFetchRequestAllRegistration()

    useEffect(() => {
        if (registrationsRequests) {
            setRegistrations(registrationsRequests)
        }
    }, [registrationsRequests])

    return{
        registrations
    }
}