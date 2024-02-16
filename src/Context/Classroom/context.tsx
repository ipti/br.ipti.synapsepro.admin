import { createContext } from "react";
import { ClassroomState } from "./state";
import { ClassroomTypes } from "./type";

export const ClassroomContext = createContext<ClassroomTypes | null>(null);

const ClassroomProvider = ({ children }: { children: React.ReactNode }) => {

    const { initialValue, CreateClassroom, classrooms } = ClassroomState()


    return (
        <ClassroomContext.Provider value={{ CreateClassroom, initialValue, classrooms }}>
            {children}
        </ClassroomContext.Provider>
    )
}

export default ClassroomProvider;