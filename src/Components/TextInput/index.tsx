import { PropsInputText } from "../../Types/types";

import { InputText } from 'primereact/inputtext';
        

const TextInput = ({ value, onChange, placeholder, disabled }: PropsInputText) => {
  return (
    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
      <InputText disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
