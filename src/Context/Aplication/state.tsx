import { useEffect, useState } from "react";
import { Projects, PropsForm } from "../../Types/types";
import { useFetchRequestProjectLists } from "../../Services/Project/query";
import { useFetchRequestUsersOne } from "../../Services/Users/query";
import { GetIdProject, GetIdUser, idProject } from "../../Services/localstorage";
import { User } from "../Users/type";

const AplicationState = () => {
    const [form, setform] = useState<PropsForm>({ title: "Formulário Sem título", description: "", question: [] })
    const { data: projects } = useFetchRequestProjectLists()

    const [project, setproject] = useState<Array<Projects> | undefined>()
    const [user, setuser] = useState<User | undefined>()


    const { data: userRequest } = useFetchRequestUsersOne(parseInt(GetIdUser()!))



    useEffect(() => {
        if (projects) {
            setproject(projects)

            if (!GetIdProject()){
                idProject(projects[0].id.toString())
            }
        }
        if (userRequest) {
            setuser(userRequest)
        }
    }, [projects, userRequest])

    return {
        form, setform, project, user
    }
}

export default AplicationState;