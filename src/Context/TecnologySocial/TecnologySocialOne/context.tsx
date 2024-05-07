import { createContext } from "react";
import { TsOneState } from "./state";
import { TsOneTypes } from "./type";

export const TsOneContext = createContext<TsOneTypes | null>(null);

const TsOneProvider = ({ children }: { children: React.ReactNode }) => {
    const { tsOne } = TsOneState()


    return (
        <TsOneContext.Provider value={{ tsOne }}>
            {children}
        </TsOneContext.Provider>
    )
}

export default TsOneProvider;