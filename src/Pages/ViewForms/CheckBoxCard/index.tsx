
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { PropsRadioButtonCardView } from "../../../Types/types";
import { Column } from "../../../Styles/styles";
import CheckboxComponent from "../../../Components/Checkbox";

export default function CheckBoxCard({ options }: PropsRadioButtonCardView) {

    const [selectedCategory, setSelectedCategory] = useState();

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {options?.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-start">
                            <Column id="center">
                                <CheckboxComponent />
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
