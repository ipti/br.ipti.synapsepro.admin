import { createContext } from "react";
import { BeneficiariesListState } from "./state";
import { BeneficiariesListType } from "./type";

export const BeneficiariesListContext = createContext<BeneficiariesListType | null>(
  null
);

const BeneficiariesListProvider = ({ children }: { children: React.ReactNode }) => {
  const { registrations } = BeneficiariesListState();

  return (
    <BeneficiariesListContext.Provider value={{ registrations }}>
      {children}
    </BeneficiariesListContext.Provider>
  );
};

export default BeneficiariesListProvider;
