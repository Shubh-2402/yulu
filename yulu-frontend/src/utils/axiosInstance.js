import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request) => {
    const authToken = getCookie("authToken");
    if (authToken) {
        if (request.headers) {
            request.headers["Authorization"] = `Bearer ${authToken}`;
        } else {
            request.headers = {
                Authorization: `Bearer ${authToken}`,
            };
        }
    }
    return request;
});

// Function to get cookie value by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

export default axiosInstance;
