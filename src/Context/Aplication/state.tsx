import { useEffect, useState } from "react";
import { PropsForm, SchoolIdentification } from "../../Types/types";
import { useFetchRequestProjectList } from "../../Services/PreRegistration/query";

const AplicationState = () => {
    const [form, setform] = useState<PropsForm>({ title: "Formulário Sem título", description: "", question: [] })
    const { data: projects } = useFetchRequestProjectList()

    const [project, setproject] = useState<Array<SchoolIdentification> | undefined>()

    useEffect(() => {
        if (projects) {
            setproject(projects)
        }
    }, [projects])

    return {
        form, setform, project
    }
}

export default AplicationState;