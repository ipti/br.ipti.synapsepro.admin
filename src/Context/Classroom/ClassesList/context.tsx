import { createContext } from "react";
import { ClassesClassroomState } from "./state";
import { ClassesClassroomTypes } from "./type";

export const ClassesClassroomContext =
  createContext<ClassesClassroomTypes | null>(null);

const ClassesClassroomProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { classes, isLoading } = ClassesClassroomState();

  return (
    <ClassesClassroomContext.Provider
      value={{ classes,  isLoading }}
    >
      {children}
    </ClassesClassroomContext.Provider>
  );
};

export default ClassesClassroomProvider;
