import http from "../axios";
import { LoginTypes } from "./types";

export const LoginSystemRequest = async (body: LoginTypes) => {

    console.log(process.env.REACT_APP_API_PATH_USERNAME)
  return await http.post("/user/login-system-auth", {
    user_name: "editor",
    password: "iptisynpaseeditor2022",
  });
};

export const LoginRequest = async (body: LoginTypes) => {
  return await http.post("/user/login", body);
};
