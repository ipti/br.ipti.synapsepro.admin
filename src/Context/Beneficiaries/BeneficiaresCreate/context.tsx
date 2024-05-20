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
  const { initialValue, project, setProject, tsOne, classrooms, CreateRegister } =
    BeneficiariesCreateState();

  return (
    <BeneficiariesCreateContext.Provider
      value={{
        initialValue, project, setProject, tsOne, classrooms, CreateRegister
      }}
    >
      {children}
    </BeneficiariesCreateContext.Provider>
  );
};

export default BeneficiariesCreateProvider;
