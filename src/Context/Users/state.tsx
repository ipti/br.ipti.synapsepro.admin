import { useEffect, useState } from "react"
import { useFetchRequestUsers } from "../../Services/Users/query"
import { ControllerUser } from "../../Services/Users/controller"
import { CreateUser } from "./type"

export const UsersState = () => {

    const [users, setusers] = useState<any>()

    const { data: userRequest } = useFetchRequestUsers()

    const props = ControllerUser()

    const CreateUser = (data: CreateUser) => {
        props.requestUserMutation.mutate(data)
    }

    useEffect(() => {
        if(userRequest){
            setusers(userRequest)
        }
    }, [userRequest])
    
   
    return { users, CreateUser }
}