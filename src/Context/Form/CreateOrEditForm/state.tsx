import { useEffect, useState } from "react"
import { PropsForm } from "../../../Types/types"
import { useParams } from "react-router-dom"
import datajson from "../../../Data/forms.json"
import responsejson from "../../../Data/responses.json"



export const CreateOrEditFormState = () => {

    const [form, setform] = useState<PropsForm | undefined>()

    const [responses, setResponses] = useState<any | undefined>()


    const { id } = useParams()


    useEffect(() => {
        const selectedForm = id ? datajson.form.find(props => props.id === id) : undefined;
        setform(selectedForm || { title: "Formulário Sem título", description: "", question: [] });
        setResponses(responsejson!)
    }, [id])


    return {
        form, setform, responses
    }
}

