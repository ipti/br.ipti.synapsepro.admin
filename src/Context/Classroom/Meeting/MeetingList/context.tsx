import { createContext } from "react";
import { MeetingListState } from "./state";
import { MeetingListTypes } from "./type";

export const MeetingListContext =
  createContext<MeetingListTypes | null>(null);

const MeetingListProvider = ({ children }: { children: React.ReactNode }) => {
  const { meetings } = MeetingListState();

  return (
    <MeetingListContext.Provider value={{ meetings }}>
      {children}
    </MeetingListContext.Provider>
  );
};

export default MeetingListProvider;
