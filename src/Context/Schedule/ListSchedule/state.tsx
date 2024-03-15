import { useEffect, useState } from "react"
import { useFetchRequestSchecule } from "../../../Services/Schedule/query"
import { Events } from "../type"


export const ScheduleListState = () => {

    const [scheduleList, setschedule] = useState<Events | undefined>()

    const { data: schedules } = useFetchRequestSchecule();

    useEffect(() => {
        if (schedules) {
            setschedule(schedules)
        }
    }, [schedules])

    return { scheduleList }
}