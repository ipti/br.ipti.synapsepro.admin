import { createContext } from "react";
import { BeneficiariesListState } from "./state";
import { BeneficiariesListType } from "./type";

export const BeneficiariesListContext =
  createContext<BeneficiariesListType | null>(null);

const BeneficiariesListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    registrations,
    DeleteRegistration,
   
  } = BeneficiariesListState();

  return (
    <BeneficiariesListContext.Provider
      value={{
        registrations,
        DeleteRegistration,
      }}
    >
      {children}
    </BeneficiariesListContext.Provider>
  );
};

export default BeneficiariesListProvider;
