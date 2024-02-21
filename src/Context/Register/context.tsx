import React, { createContext } from "react";
import { RegisterTypes } from "./type";
import { RegisterState } from "./state";

export const RegisterContext = createContext<RegisterTypes | null>(null);

const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const { padding, NextStep, initialState, isOverAge, setIsOverAge, step } =
    RegisterState();
  return (
    <RegisterContext.Provider
      value={{
        padding,
        NextStep,
        isOverAge,
        setIsOverAge,
        initialState,
        step,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
