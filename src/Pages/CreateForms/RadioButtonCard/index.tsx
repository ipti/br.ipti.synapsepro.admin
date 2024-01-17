import { RadioButton } from "primereact/radiobutton";
import TextInput from "../../../Components/TextInput";
import { Column } from "../../../Styles/styles";
import { PropsRadioButtonCard } from "../../../Types/types";
import { useState } from "react";

export default function RadioButtonCard({
  options,
  editLabel,
  index,
}: PropsRadioButtonCard) {
  return (
    <div className="card flex justify-content w-full">
      <div className="flex flex-column gap-3 w-full">
        {options?.map((item, indexRadioButton) => {
          return (
            <div key={indexRadioButton} className="flex align-item">
              <Column id="center">
                <RadioButton name="item" />
              </Column>
              <ControllerInput
                item={item}
                editLabel={editLabel!}
                index={index}
                indexRadioButton={indexRadioButton}
              />
              {/* <label htmlFor={item.key} className="ml-2">{item.label}</label> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface ControllerInputProps {
  item: any;
  editLabel: (
    index: number,
    indexRadioButton: number,
    newLabel: string
  ) => void;
  index: number;
  indexRadioButton: number;
}

const ControllerInput = ({
  editLabel,
  index,
  indexRadioButton,
  item,
}: ControllerInputProps) => {
  const [label, setlabel] = useState(item?.label);
  return (
    <TextInput
      value={label}
      onBlur={() => {
        editLabel!(index, indexRadioButton, label);
      }}
      onChange={(e) => setlabel(e.target.value)}
    />
  );
};
