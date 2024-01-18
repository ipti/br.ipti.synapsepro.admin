import { RadioButton } from "primereact/radiobutton";
import TextInput from "../../../Components/TextInput";
import { Column, Padding, Row } from "../../../Styles/styles";
import { PropsRadioButtonCard } from "../../../Types/types";
import { useState } from "react";

export default function RadioButtonCard({
  options,
  editLabel,
  index,
}: PropsRadioButtonCard) {
  return (
    <div className="card ">
      <div className="flex flex-column gap-3">
        {options?.map((item, indexRadioButton) => {
          return (
            <Row key={indexRadioButton}>
              <Column id="center">
                <RadioButton name="item" />
              </Column>
              <Padding padding="4px" />
              <ControllerInput
                item={item}
                editLabel={editLabel!}
                index={index}
                indexRadioButton={indexRadioButton}
              />
              {/* <label htmlFor={item.key} className="ml-2">{item.label}</label> */}
            </Row>
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
