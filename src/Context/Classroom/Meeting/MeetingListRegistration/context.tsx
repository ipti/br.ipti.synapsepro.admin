import { createContext } from "react";
import { MeetingListRegisterTypes } from "./type";
import { MeetingListRegistrationState } from "./state";

export const MeetingListRegistrationContext =
  createContext<MeetingListRegisterTypes | null>(null);

const MeetingListRegistrationProvider = ({ children }: { children: React.ReactNode }) => {
  const { registrations } = MeetingListRegistrationState();

  return (
    <MeetingListRegistrationContext.Provider value={{ registrations }}>
      {children}
    </MeetingListRegistrationContext.Provider>
  );
};

export default MeetingListRegistrationProvider;
