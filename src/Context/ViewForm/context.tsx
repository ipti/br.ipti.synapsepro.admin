import { createContext } from "react";
import { ViewFormTypes } from "../../Types/types";
import { ViewFormState } from "./state";

export const ViewFormContext = createContext<ViewFormTypes | null>(null);

const ViewFormProvider = ({ children }: {children: React.ReactNode}) => {

    const {form, setform} =  ViewFormState()

    return (
        <ViewFormContext.Provider value={{ form, setform }}>
            {children}
        </ViewFormContext.Provider>
    )
}

export default ViewFormProvider;