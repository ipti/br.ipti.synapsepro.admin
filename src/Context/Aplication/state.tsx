import { useEffect, useState } from "react";
import { Projects, PropsForm } from "../../Types/types";
import { useFetchRequestProjectLists } from "../../Services/Project/query";

const AplicationState = () => {
    const [form, setform] = useState<PropsForm>({ title: "Formulário Sem título", description: "", question: [] })
    const { data: projects } = useFetchRequestProjectLists()

    const [project, setproject] = useState<Array<Projects> | undefined>()

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