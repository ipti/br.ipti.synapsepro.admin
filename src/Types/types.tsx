import { DropdownChangeEvent } from "primereact/dropdown";
import { SelectItemOptionsType } from "primereact/selectitem";
import { ChangeEventHandler } from "react";

export interface PropsInputText {
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined
}

export interface PropsInputArea {
    value?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined
}

export interface PropsRadioButton {
    value?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined,
    placeholder?: string | undefined,
    disabled?: boolean | undefined,
    options?: Array<any>
}

export interface PropsDropdown {
    value?: any,
    onChange?(event: DropdownChangeEvent): void,
    options?: SelectItemOptionsType | undefined,
    placerholder?: string
}