import { ControllerSchedule } from "../../Services/Schedule/controller"
import { CreateSchedule } from "./type"

export const ScheduleState = () => {
    const initialValue: CreateSchedule = {
        start_date: "",
        end_date: "",
        project: 0,
        year: 0,
    }

    const { requestSaveEventPreMutation, requestDeleteScheduleMutation } = ControllerSchedule()

    const CreateSchedule = (body: CreateSchedule) => {
        requestSaveEventPreMutation.mutate(body)
    }

    const DeleteSchedule = (id: number) => {
        requestDeleteScheduleMutation.mutate(id)
    }
    return { initialValue, CreateSchedule, DeleteSchedule }
}