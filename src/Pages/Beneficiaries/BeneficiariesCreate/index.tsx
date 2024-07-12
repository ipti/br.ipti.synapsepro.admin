import BeneficiariesCreateProvider from "../../../Context/Beneficiaries/BeneficiaresCreate/context";
import { CreateUserPage } from "../../Users/CreateUser";

const BeneficiariesCreate = () => {
  return (
    <BeneficiariesCreateProvider>
      <CreateUserPage isStudent />
    </BeneficiariesCreateProvider>
  );
};

export default BeneficiariesCreate;
