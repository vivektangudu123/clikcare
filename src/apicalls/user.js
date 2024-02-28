import { axiosInstance } from "./axiosInstance";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const RegisterUser = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post(baseUrl + "/api/users/register", payload);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
};