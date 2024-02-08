import { LoginTypes } from "../../Services/Login/types";

export interface LoginContextText {
    initialValue: LoginTypes;
    Login: (body: LoginTypes) => void;
    error: boolean;
}