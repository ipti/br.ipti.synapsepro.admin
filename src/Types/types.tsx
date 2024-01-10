import { ChangeEventHandler } from "react";

export interface PropsInputText {
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder?: string | undefined
}