
import { Dropdown } from 'primereact/dropdown';
import { PropsDropdown } from '../../Types/types';

const DropdownComponent = ({ value, onChange, options, placerholder, optionsLabel }: PropsDropdown) => {
    return (
        <Dropdown value={value} onChange={onChange} options={options} optionLabel={optionsLabel ?? "name"}
            placeholder={placerholder} className="w-full" />)
}

export default DropdownComponent