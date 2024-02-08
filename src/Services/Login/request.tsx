import http from "../axios"
import { LoginTypes } from "./types"

export const LoginRequest = async (body: LoginTypes) => {
    return await http.post("/auth/login", body)
}

