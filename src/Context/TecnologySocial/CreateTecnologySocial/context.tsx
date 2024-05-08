import { createContext } from "react";
import { CreateTsState } from "./state";
import { CreateTsTypes } from "./type";

export const CreateTsContext = createContext<CreateTsTypes | null>(null);

const CreateTsProvider = ({ children }: { children: React.ReactNode }) => {
    const { CreateTechnology } = CreateTsState()


    return (
        <CreateTsContext.Provider value={{ CreateTechnology }}>
            {children}
        </CreateTsContext.Provider>
    )
}

export default CreateTsProvider;