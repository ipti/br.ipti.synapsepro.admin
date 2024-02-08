import { useState } from "react"
import { LoginController } from "../../Services/Login/controller"
import { LoginTypes } from "../../Services/Login/types"

export const LoginState = () => {
    const [error, setError] = useState(false)
    const initialValue: LoginTypes = {
        username: "",
        password: ""
    }

    const { LoginRequestMutation } = LoginController({ setError })

    const Login = (body: LoginTypes) => {
        LoginRequestMutation.mutate(body)
    }
    return { initialValue, Login, error }
}