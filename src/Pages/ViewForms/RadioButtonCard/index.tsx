
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { PropsRadioButtonCardView } from "../../../Types/types";

export default function RadioButtonCard({options}: PropsRadioButtonCardView) {
    
    const [selectedCategory, setSelectedCategory] = useState();

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {options?.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={true} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        