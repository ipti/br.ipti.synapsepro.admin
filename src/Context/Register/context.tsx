import React, { createContext } from "react";

export const RegistrationContext = createContext({});

const RegistrationContextProvider = ({ children }: {children: React.ReactNode}) => {

    return (
        <RegistrationContext.Provider
            value={{
            }}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationContextProvider;