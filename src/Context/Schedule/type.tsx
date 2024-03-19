
export interface ScheduleTypes {
    initialValue: CreateSchedule;
    CreateSchedule: (body: any) => void;
    scheduleList: Events | undefined;
    DeleteSchedule: (id: number) => void;
    UpdateSchedule: (body: CreateSchedule, id: number) => void
}

export interface CreateSchedule {
    start_date: any,
    end_date: any,
    project?: any,
    year?: any,
}

export type Events = Event[]

export interface Event {
  id: number
  start_date: string
  end_date: string
  year: number
}



