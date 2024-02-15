import { PropsInputNumber } from "../../Types/types";


import { InputNumber } from 'primereact/inputnumber';

const InputNumberComponent = ({
    value,
    onChange,
    placeholder,
    disabled,
    onBlur,
    name,
}: PropsInputNumber) => {
    return (
        <div>
            <InputNumber
                style={{ width: "100%" }}
                onBlur={onBlur}
                disabled={disabled}
                value={value}
                name={name}
                onValueChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputNumberComponent;
