import { SignupProps } from "../pages/Signup";
import {httpClient} from "./http"


export const signup = async(userData:SignupProps) => {
    const response = await httpClient.post("/join",
    userData);
    return response.data;
    
}

export const resetRequest = async (data: SignupProps) => {
    const response = await httpClient.post("/reset",
    data);
    return response.data;
}

export const resetPassword = async (data: SignupProps) => {
    const response = await httpClient.put("/reset",
    data);
    return response.data;
}

export const login = async (data: SignupProps) => {
    const response = await httpClient.post("/login",
    data);    
    return response.data;
}
