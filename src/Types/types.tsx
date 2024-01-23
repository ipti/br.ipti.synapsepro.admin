import { DropdownChangeEvent } from "primereact/dropdown";
import { RadioButtonChangeEvent } from "primereact/radiobutton";
import { SelectItemOptionsType } from "primereact/selectitem";
import { ChangeEventHandler, Dispatch, FocusEventHandler, SetStateAction } from "react";

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
export interface PropsRadioButtonCardCreate {
    options?: Array<any>,
    editLabel?(index: number, indexRadioButton: number, newLabel: string): void,
    deleteOptions: (index: number, indexRadioButton: number) => void,
    index: number
}

export interface PropsCheckBoxCardView {
    options?: Array<any>,
    item?: any,
    handleChange?: (e: any, id: number, idOptions: number) => void,
    form?: any
}

export interface PropsRadioButtonCardView {
    options?: Array<any>,
    item?: any,
    handleChange?: (e: any, id: number) => void,
    form?: any
}

export interface PropsDropdown {
    value?: any,
    onChange?(event: DropdownChangeEvent): void,
    options?: SelectItemOptionsType | undefined,
    placerholder?: string
}

export interface PropsAplicationContext {
    form: Array<any>,
    setform: any
}

