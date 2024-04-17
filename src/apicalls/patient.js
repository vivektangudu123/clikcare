import { axiosInstance } from "./axiosInstance";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const Login_Patient = async (mobile_number,type) => {

    const send_otp_body = {
        'mobile_number': mobile_number,
        "type":type
    }
    try {
        const response = await fetch("http://localhost:5001" + '/api/auth/send_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(send_otp_body)
        });

        if (response.ok) {

            const data = await response.text();
            // console.log(data)
            if (data === "pending") {
                return "pending";
            }
            else {
                return data;
            }
        } else {
            console.log("Request failed with status:", response.status);
            return "error";
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
export const Login_OTP = async (mobile_number, otp) => {
    console.log(mobile_number);
    console.log(otp);

    const verify_otp_body = {
        'mobile_number': mobile_number,
        'otp': otp
    };

    try {
        const response = await fetch("http://localhost:5001/api/auth/verify_otp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(verify_otp_body)
        });

        if (response.ok) {
            // console.log("Request successful!");
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const status = xmlDoc.querySelector('status').textContent;
            const jwtToken = xmlDoc.querySelector('jwtToken').textContent;
            console.log(jwtToken);
            localStorage.setItem('JWT', jwtToken);
            if (status === "approved") {
                return "approved";
            } else {
                return "invalid";
            }
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