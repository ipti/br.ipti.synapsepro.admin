import { createContext } from "react";
import { ProjectListTypes } from "./type";

export const ProjectListContext = createContext<ProjectListTypes | null>(null);

const ProjectListProvider = ({ children }: { children: React.ReactNode }) => {



    return (
        <ProjectListContext.Provider value={{  }}>
            {children}
        </ProjectListContext.Provider>
    )
}

export default ProjectListProvider;