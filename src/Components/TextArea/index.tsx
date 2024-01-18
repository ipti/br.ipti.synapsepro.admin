
import { InputTextarea } from 'primereact/inputtextarea';
import { PropsInputArea } from '../../Types/types';


const TextAreaComponent = ({value, onChange, onBlur, placeholder}: PropsInputArea) => {
    return (
        <InputTextarea style={{width: "100%"}} placeholder={placeholder} onBlur={onBlur} value={value} autoResize onChange={onChange} rows={5} cols={30} />
    )
}

export default TextAreaComponent;