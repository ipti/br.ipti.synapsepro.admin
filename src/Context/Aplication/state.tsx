import { useState } from "react";

const AplicationState = () => {
    const [form, setform] = useState([{label: "Formulário Sem título", description: "", type: "title"}])
    console.log(form)

    return {
        form, setform
    }
}

export default AplicationState;