import { createContext } from "react";
import AplicationState from "./state";
import { PropsAplicationContext } from "../../Types/types";

export const AplicationContext = createContext<PropsAplicationContext | null>(null);

const AplicationProvider = ({ children }: { children: React.ReactNode }) => {

    const { form, setform, project } = AplicationState();

    return (
        <AplicationContext.Provider value={{ form, setform, project }}>
            {children}
        </AplicationContext.Provider>
    )
}

export default AplicationProvider;