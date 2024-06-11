import { createContext } from "react";
import { ProjectOneState } from "./state";
import { ProjectOneTypes } from "./type";

export const ProjectOneContext = createContext<ProjectOneTypes | null>(null);

const ProjectOneProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, project, updateProject, rulerProject } = ProjectOneState();

  return (
    <ProjectOneContext.Provider
      value={{ isLoading, project, updateProject, rulerProject }}
    >
      {children}
    </ProjectOneContext.Provider>
  );
};

export default ProjectOneProvider;
