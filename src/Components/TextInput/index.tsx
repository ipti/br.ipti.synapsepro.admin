import { PropsInputText } from "../../Types/types";

import { InputText } from "primereact/inputtext";

const TextInput = ({
  value,
  onChange,
  placeholder,
  disabled,
  onBlur,
  name,
}: PropsInputText) => {
  return (
    <div>
      <InputText
        style={{ width: "100%" }}
        onBlur={onBlur}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
