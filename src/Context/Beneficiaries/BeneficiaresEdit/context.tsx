import { createContext } from "react";
import { BeneficiariesEditState } from "./state";
import { BeneficiariesEditType } from "./type";

export const BeneficiariesEditContext =
  createContext<BeneficiariesEditType | null>(null);

const BeneficiariesEditProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { registrations, initialValue } =
    BeneficiariesEditState();

  return (
    <BeneficiariesEditContext.Provider
      value={{
        registrations,
        initialValue
      }}
    >
      {children}
    </BeneficiariesEditContext.Provider>
  );
};

export default BeneficiariesEditProvider;
