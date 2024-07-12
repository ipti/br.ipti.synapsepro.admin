import { useState } from "react"
import { LoginController } from "../../Services/Login/controller"
import { LoginTypes } from "../../Services/Login/types"

export const LoginState = () => {
    const [error, setError] = useState(false)
    const initialValue: LoginTypes = {
        user_name: "",
        password: ""
    }

    const { LoginSystemRequestMutation } = LoginController({ setError })

    const Login = (body: LoginTypes) => {
        LoginSystemRequestMutation.mutate(body)
    }
    return { initialValue, Login, error }
}