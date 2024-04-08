export const get_all_records = async () => {
    try {
        const response = await fetch("http://localhost:5001" + '/records/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Authorization": `Bearer ${localStorage.getItem('JWT')}`
            },
        })
        if (response.ok) {

            const data = await response.text();
            return data;
        } else {
            console.log("Request failed with status:", response.status);
            return "error";
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};