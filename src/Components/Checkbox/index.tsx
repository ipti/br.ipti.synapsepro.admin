
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface PropsCheckboxComponent {
    value?: any;
    onChange?(event: CheckboxChangeEvent): void,
    checked?: boolean
}

export default function CheckboxComponent({ value, onChange, checked }: PropsCheckboxComponent) {



    return (
        <Checkbox name="category" value={value} onChange={onChange} checked={checked!} />
    )
}
