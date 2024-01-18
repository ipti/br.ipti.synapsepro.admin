import { useState } from "react";

const AplicationState = () => {
    const [form, setform] = useState([])
    console.log(form)

    return {
        form, setform
    }
}

export default AplicationState;