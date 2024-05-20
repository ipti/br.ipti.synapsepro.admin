import { createContext } from "react";
import { CreateProjectTypes } from "./type";
import { CreateProjectState } from "./state";

export const CreateProjectContext = createContext<CreateProjectTypes | null>(
  null
);

const CreateProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const { CreateProject } = CreateProjectState();

  return (
    <CreateProjectContext.Provider value={{ CreateProject }}>
      {children}
    </CreateProjectContext.Provider>
  );
};

export default CreateProjectProvider;
