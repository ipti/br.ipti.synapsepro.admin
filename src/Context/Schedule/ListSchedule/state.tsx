import { useEffect, useState } from "react"
import { ControllerSchedule } from "../../../Services/Schedule/controller"
import { Events } from "../type"


export const ScheduleListState = () => {
   
    const [scheduleList, setschedule] = useState<Events | undefined >()

    const { schedules } = ControllerSchedule()

    useEffect(() => {
        if(schedules){
            setschedule(schedules)
        }
    }, [schedules])
   
    return { scheduleList }
}