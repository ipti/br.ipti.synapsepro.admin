import { InputText } from 'primereact/inputtext';
import { PropsInputText } from '../../Types/types';

const TextInput = ({value, onChange, placeholder}: PropsInputText) => {
    return(
        <InputText value={value} onChange={onChange} placeholder={placeholder} />
    )
}

export default TextInput