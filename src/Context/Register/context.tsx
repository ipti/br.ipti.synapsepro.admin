import React, { createContext } from "react";
import { RegisterTypes } from "./type";
import { RegisterState } from "./state";

export const RegisterContext = createContext<RegisterTypes | null>(null);

const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
    const { padding } = RegisterState()
    return (
        <RegisterContext.Provider
            value={{
                padding
            }}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider;