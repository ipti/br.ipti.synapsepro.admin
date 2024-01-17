import { DropdownChangeEvent } from "primereact/dropdown";
import { RadioButtonChangeEvent } from "primereact/radiobutton";
import { SelectItemOptionsType } from "primereact/selectitem";
import { ChangeEventHandler, FocusEventHandler } from "react";

export interface PropsInputText {
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined
}

export interface PropsInputArea {
    value?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined
}

export interface PropsRadioButton {
    value?: string,
    onChange?(event: RadioButtonChangeEvent): void,
    checked?: boolean,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    label?: string,
    name?: string
}
export interface PropsRadioButtonCard {
    options?: Array<any>,
    editLabel?(index: number, indexRadioButton: number, newLabel: string): void,
    index: number
}

export interface PropsDropdown {
    value?: any,
    onChange?(event: DropdownChangeEvent): void,
    options?: SelectItemOptionsType | undefined,
    placerholder?: string
}