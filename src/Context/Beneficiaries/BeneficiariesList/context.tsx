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
    limite,
    handleFilter,
    page,
    setLimite,
    setPage,
    filter,
    setFilter,
    DeleteRegistration,
    cpfFilter,
    nameFilter,
  } = BeneficiariesListState();

  return (
    <BeneficiariesListContext.Provider
      value={{
        registrations,
        handleFilter,
        limite,
        page,
        setLimite,
        setPage,
        filter,
        setFilter,
        DeleteRegistration,
        cpfFilter,
        nameFilter,
      }}
    >
      {children}
    </BeneficiariesListContext.Provider>
  );
};

export default BeneficiariesListProvider;
