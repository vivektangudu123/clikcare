import { axiosInstance } from "./axiosInstance";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const get_all_doctors = async () => {


    try {
        const response = await fetch("http://localhost:5001" + '/doctors/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });

        if (response.ok) {

            const data = await response.text();
            console.log(data)
            return data
        } else {
            console.log("Request failed with status:", response.status);
            return "error";
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};



// export const Login_Patient = async (payload) => {
//     try {
//         console.log(payload)
//         const response = await axiosInstance.post(baseUrl + "/api/users/login", payload);
//         console.log(response)
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };