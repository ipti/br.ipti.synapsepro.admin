import { createContext } from "react";
import { BeneficiariesCreateState } from "./state";
import { BeneficiariesCreateType } from "./type";

export const BeneficiariesCreateContext =
  createContext<BeneficiariesCreateType | null>(null);

const BeneficiariesCreateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { initialValue } =
    BeneficiariesCreateState();

  return (
    <BeneficiariesCreateContext.Provider
      value={{
        initialValue
      }}
    >
      {children}
    </BeneficiariesCreateContext.Provider>
  );
};

export default BeneficiariesCreateProvider;
