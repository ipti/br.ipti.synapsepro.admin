import { useEffect, useState } from "react"
import { useFetchRequestUsers } from "../../Services/Users/query"

export const UsersState = () => {

    const [users, setusers] = useState<any>()

    const { data: userRequest } = useFetchRequestUsers()

    useEffect(() => {
        if(userRequest){
            setusers(userRequest)
        }
    }, [userRequest])
    
   
    return { users }
}