import { createContext } from "react";
import { CreateOrEditFormTypes } from "../../../Types/types";
import { CreateOrEditFormState } from "./state";

export const CreateOrEditFormContext = createContext<CreateOrEditFormTypes | null>(null);

const CreateOrEditFormProvider = ({ children }: {children: React.ReactNode}) => {

    const {form, setform, responses} =  CreateOrEditFormState()

    return (
        <CreateOrEditFormContext.Provider value={{ form, setform, responses }}>
            {children}
        </CreateOrEditFormContext.Provider>
    )
}

export default CreateOrEditFormProvider;