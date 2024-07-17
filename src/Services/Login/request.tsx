import http from "../axios";
import { LoginTypes } from "./types";

export const LoginSystemRequest = async (body: LoginTypes) => {
  return await http.post("/user/login-system-auth", {
    user_name: process.env.REACT_APP_API_PATH_USERNAME,
    password: process.env.REACT_APP_API_PATH_PASSWORD,
  });
};

export const LoginRequest = async (body: LoginTypes) => {
  return await http.post("/user/login", body);
};
