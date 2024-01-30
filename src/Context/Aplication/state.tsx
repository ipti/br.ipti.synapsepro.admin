import { useState } from "react";
import { PropsForm } from "../../Types/types";

const AplicationState = () => {
    const [form, setform] = useState<PropsForm>({title: "Formulário Sem título", description: "", question: []})
    console.log(form)
    return {
        form, setform
    }
}

export default AplicationState;