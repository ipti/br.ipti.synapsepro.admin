
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import { PropsRadioButton } from "../../Types/types";
import TextInput from "../TextInput";
import { Column } from "../../Styles/styles";

export default function RadioButtonComponent({options}: PropsRadioButton) {

    console.log(options)

    return (
        <div className="card flex justify-content">
            <div className="flex flex-column gap-3">
                {options?.map((item) => {
                    return (
                        <div key={item.key} className="flex align-item">
                            <Column id="center">
                            <RadioButton inputId={item.key} name="item" />
                            </Column>
                            <TextInput value={item.label} onChange={() => {}} />
                            {/* <label htmlFor={item.key} className="ml-2">{item.label}</label> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
