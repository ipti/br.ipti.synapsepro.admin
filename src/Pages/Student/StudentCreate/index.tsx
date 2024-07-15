import UsersProvider from "../../../Context/Users/context";
import { CreateUserPage } from "../../Users/CreateUser";

const SutentCreate = () => {
  return (
    <UsersProvider>
      <CreateUserPage isStudent />
    </UsersProvider>
  );
};

export default SutentCreate;
