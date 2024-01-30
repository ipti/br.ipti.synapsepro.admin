import { useEffect, useState } from "react"
import datajson from "./../../Data/forms.json"
import { FormsJson } from "../../Types/types"

const ListFormState = () => {

    const [forms, setForms] = useState<FormsJson | undefined>()

    useEffect(() => {
     setForms(datajson)
    }, [])
    

    return {
        forms
    }
}

export default ListFormState;