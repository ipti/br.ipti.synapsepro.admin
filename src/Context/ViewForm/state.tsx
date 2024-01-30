import { useEffect, useState } from "react"
import { PropsForm } from "../../Types/types"
import { useParams } from "react-router-dom"
import datajson from "./../../Data/forms.json"


export const ViewFormState = () => {

    const [form, setform] = useState<PropsForm | undefined>()


    const { id } = useParams()

    useEffect(() => {
        const selectedForm = id ? datajson.form.find(props => props.id === id) : undefined;
        setform(selectedForm || { title: "Formulário Sem título", description: "", question: [] });
    }, [id])


    return {
        form, setform
    }
}

