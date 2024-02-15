import { Calendar } from "primereact/calendar";
import { PropsInputCalendar } from "../../Types/types";

const CalendarComponent = ({
    value,
    onChange,
    placeholder,
    disabled,
    onBlur,
    name,
    view,
    dateFormat
}: PropsInputCalendar) => {
    return (
        <Calendar value={value} onChange={onChange} dateFormat={dateFormat} name={name} placeholder={placeholder} />
    )
}

export default CalendarComponent;