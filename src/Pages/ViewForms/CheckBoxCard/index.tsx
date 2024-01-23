
import CheckboxComponent from "../../../Components/Checkbox";
import { Column } from "../../../Styles/styles";
import { PropsCheckBoxCardView } from "../../../Types/types";

export default function CheckBoxCard({ options, handleChange, item }: PropsCheckBoxCardView) {

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {options?.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-start">
                            <Column id="center">
                                <CheckboxComponent checked={category.value} onChange={(e) => {handleChange!(e.checked, item.id, category.id)}} />
                            </Column>                            <Column id="center">
                                <label htmlFor={category.key} className="ml-2">{category.label}</label>
                            </Column>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
