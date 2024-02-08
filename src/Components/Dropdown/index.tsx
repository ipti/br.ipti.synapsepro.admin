
import { Dropdown } from 'primereact/dropdown';
import { PropsDropdown } from '../../Types/types';

const DropdownComponent = ({value,  onChange, options, placerholder}: PropsDropdown) => {
    return (
        <div className="flex justify-content">
            <Dropdown value={value} onChange={onChange} options={options} optionLabel="name"
                placeholder={placerholder} className="w-full" />
        </div>)
}

export default DropdownComponent