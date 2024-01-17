
import { InputTextarea } from 'primereact/inputtextarea';
import { PropsInputArea } from '../../Types/types';


const TextAreaComponent = ({value, onChange, onBlur}: PropsInputArea) => {
    return (
        <InputTextarea onBlur={onBlur} value={value} autoResize onChange={onChange} rows={5} cols={30} />
    )
}

export default TextAreaComponent;