import { createContext } from "react";
import { FormListContextTypes } from "../../Types/types";
import ListFormState from "./state";

export const ListFormContext = createContext<FormListContextTypes | null>(null);

const ListFormProvider = ({ children }: { children: React.ReactNode }) => {

    const { forms } = ListFormState();

    return (
        <ListFormContext.Provider value={{ forms }}>
            {children}
        </ListFormContext.Provider>
    )
}

export default ListFormProvider;