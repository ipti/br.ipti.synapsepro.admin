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
      <span className="p-input-icon-left">
        <i className="pi pi-search" />

        <InputText
          style={{ width: "100%" }}
          onBlur={onBlur}
          disabled={disabled}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </span>
    </div>
  );
};

export default TextInput;
