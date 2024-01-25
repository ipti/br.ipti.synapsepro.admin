import { DropdownChangeEvent } from "primereact/dropdown";
import { RadioButtonChangeEvent } from "primereact/radiobutton";
import { SelectItemOptionsType } from "primereact/selectitem";
import { ChangeEventHandler, FocusEventHandler } from "react";
import RenderForm from "../Components/ComponentMulti/Create";

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
    index: number,
    form: any,
    setform: any
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

export interface PropsForm {
    title: string, description: string, question: Array<any>
}

export interface PropsAplicationContext {
    form: PropsForm,
    setform: any
}

export interface PropsComponentForm {
    name: string,
    type: string,
    component: ({ form, index, item, setform }: PropsComponets) => JSX.Element
}

export interface PropsComponets {
    index?: number, 
    form?: any, 
    item?: any, 
    setform?: any, 

}