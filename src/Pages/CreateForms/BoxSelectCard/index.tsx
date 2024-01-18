import { useEffect, useState } from "react";
import CheckboxComponent from "../../../Components/Checkbox";
import TextInput from "../../../Components/TextInput";
import { Column, Padding, Row } from "../../../Styles/styles";
import { PropsRadioButtonCardCreate } from "../../../Types/types";

export default function BoxSelectCard({
    options,
    editLabel,
    index,
    deleteOptions
}: PropsRadioButtonCardCreate) {
    return (
        <div className="card ">
            <div className="flex flex-column gap-3">
                {options?.map((item, indexRadioButton) => {
                    return (
                        <Row key={indexRadioButton}>
                            <Column id="center">
                                <CheckboxComponent />
                            </Column>
                            <Padding padding="4px" />
                            <Row id="space-between" style={{ width: "100%" }}>
                                <ControllerInput
                                    item={item}
                                    editLabel={editLabel!}
                                    index={index}
                                    indexRadioButton={indexRadioButton}
                                />
                                <Padding padding="4px" />
                                <Column id="center">
                                    <i className="pi pi-trash" style={{ cursor: "pointer" }} onClick={() => deleteOptions(index, indexRadioButton)} />
                                </Column>
                            </Row>
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
    const [label, setlabel] = useState("");

    useEffect(() => {
        setlabel(item?.label)
    }, [item?.label])

    return (
        <div className="w-full">
            <TextInput
                value={label}
                onBlur={() => {
                    editLabel!(index, indexRadioButton, label);
                }}
                onChange={(e) => setlabel(e.target.value)}
            />
        </div>
    );
};
