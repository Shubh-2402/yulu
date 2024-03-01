import axios from "axios";
import getCookie from "./getCookie";

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

export default axiosInstance;
