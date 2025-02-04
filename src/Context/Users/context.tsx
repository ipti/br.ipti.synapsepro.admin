import { createContext } from "react";
import { UsersTypes } from "./type";
import { UsersState } from "./state";

export const UsersContext = createContext<UsersTypes | null>(null);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
    const { users, CreateUser, DeleteUser, UpdateUser, isLoading, error } = UsersState()
    return (
        <UsersContext.Provider value={{ users, CreateUser, DeleteUser, UpdateUser, isLoading, error }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;