import { createContext } from "react";
import { CreateMeetingType } from "./type";
import { CreateMeetingState } from "./state";

export const CreateMeetingContext = createContext<CreateMeetingType | null>(null);

const CreateMeetingProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateMeeting } = CreateMeetingState()


    return (
        <CreateMeetingContext.Provider value={{ CreateMeeting }}>
            {children}
        </CreateMeetingContext.Provider>
    )
}

export default CreateMeetingProvider;