import { createContext } from "react";
import { ClassroomState } from "./state";
import { ClassroomTypes } from "./type";

export const ScheduleContext = createContext<ClassroomTypes | null>(null);

const ScheduleProvider = ({ children }: { children: React.ReactNode }) => {

    const { initialValue, CreateClassroom } = ClassroomState()


    return (
        <ScheduleContext.Provider value={{CreateClassroom, initialValue }}>
            {children}
        </ScheduleContext.Provider>
    )
}

export default ScheduleProvider;