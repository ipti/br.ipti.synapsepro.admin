import { createContext } from "react";
import { CreateProjectTypes } from "./type";

export const CreateProjectContext = createContext<CreateProjectTypes | null>(null);

const CreateProjectProvider = ({ children }: { children: React.ReactNode }) => {



    return (
        <CreateProjectContext.Provider value={{  }}>
            {children}
        </CreateProjectContext.Provider>
    )
}

export default CreateProjectProvider;