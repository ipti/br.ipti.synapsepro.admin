import { createContext } from "react";
import { ProjectOneState } from "./state";
import { ProjectOneTypes } from "./type";

export const ProjectOneContext = createContext<ProjectOneTypes | null>(null);

const ProjectOneProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, project, updateProject } = ProjectOneState();

  return (
    <ProjectOneContext.Provider value={{ isLoading, project, updateProject }}>
      {children}
    </ProjectOneContext.Provider>
  );
};

export default ProjectOneProvider;
